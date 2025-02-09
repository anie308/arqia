import { randomUUID } from "crypto";
import { comparePasswords, hashPassword } from "../../utils/passwordHash";
import { generateRandomToken, generateToken, verifyToken } from "../../utils/token";
import { ILoginInformation, IUserRegistrationInformation, IUserUpdateData } from "./types";
import { welcomeEmail } from "../../utils/mailTemplates/welcomeEmail.html";
import { checkPassword } from "../../utils/passwordValidator";
import { Configs } from "../../configs";
import { UserRepositoryClass } from "./user.repo";
import { passwordResetEmail } from "../../utils/mailTemplates/passwordResetEmail.html";
import { Notification } from "../notification/notification.service";
import { ENotificationType } from "../notification/types";
import { mailController } from "../../service/mail";
import { VerificationCodeRepoClass } from "./token/token.repo";
import { sendVerificationEmail } from "../../utils/mailTemplates/verficationEmail.html";


const UserRepo = new UserRepositoryClass();
const Mail = new mailController();
const VerificationCodeRepo = new VerificationCodeRepoClass();

export class UserAccountServiceClass {

    async register(userInformation: any) {
        const passwordValidationStatus = checkPassword(userInformation.password, userInformation.confirmPassword)
        if (passwordValidationStatus.success == false) {
            return passwordValidationStatus
        }
        const registrationAttemptResponse = await this.createAccount(userInformation, false, userInformation.password)
        return registrationAttemptResponse
    }


    async sendVerificationEmail(userId: string) {

        //check if account with email exists
        const userFound = await UserRepo.getUserById(userId)
        if (userFound == null) {
            let errorMessage = "Cannot Send Verification Email, User Does Not Exist"
            return { success: false, message: errorMessage }
        }

        //check if account email is already verified
        if (userFound.isEmailVerified) {
            return { success: false, message: "Email already verified" }
        }

        //generate verification code
        const verificationCode = generateRandomToken(3)

        //create entry in token database
        await VerificationCodeRepo.createNewEntry({ userId, code: verificationCode })

        //send email
        Mail.sendOne(userFound.email, `${Configs.organization.name}: Verification Code is ${verificationCode}`, await sendVerificationEmail(verificationCode))

        return { success: false, message: "Verification email sent, check your inbox or spam folder" }
    }


    async verifyEmailAddress(userId: string, verificationCode: string) {
        const verificationEntry = await VerificationCodeRepo.findByCode(verificationCode);

        if (!verificationEntry || verificationEntry.userId !== userId) {
            return { success: false, message: "Invalid Email Verification Code" };
        }

        const userFound = await UserRepo.getUserById(userId);

        if (!userFound) {
            return { success: false, message: "Invalid Email Verification Code" };
        }

        if (userFound.isEmailVerified) {
            return { success: false, message: "Email Already Verified" };
        }

        await UserRepo.updateUserById(userId, { isEmailVerified: true, emailVerifiedAt: new Date() });

        await Mail.sendOne(
            userFound.email,
            `Welcome To ${Configs.organization.name}:`,
            await welcomeEmail(userFound.names.firstName)
        );

        return { success: true, message: "Email verification successful, Proceed to Login!" };
    }

    async login(loginObject: ILoginInformation) {
        //Fetch User
        const user = await UserRepo.getUserByFields(loginObject.emailAddressOrUsername)
        if (user == null) {
            return { success: false, message: "Invalid Login Credentials", data: [] }
        }

        //Compare Passwords
        const doesPasswordMatch = await comparePasswords(loginObject.password, user.passwordHash || "")
        if (!doesPasswordMatch) {
            return { success: false, message: "Invalid Login Credentials", data: [] }
        }

        //remove sensitive fields
        delete user.passwordHash;
        delete user.googleOauthUserId;

        //Notify user of login
        Notification.notify({
            userId: user._id  as string,
            message: `New login around ${new Date()}`,
            notificationType: ENotificationType.ALERT
        })

        return { success: true, message: `Login Successful for user ${user._id}`, data: await this.loginData(user) }

    }

    async updateUserData(userId: string, updateData: IUserUpdateData) {
        const updateResponse = await UserRepo.updateUserById(userId, updateData)
        if (!updateResponse) {
            return { success: false, message: "An Error Occured While Performing Update", data: [] }
        }
        return { success: true, message: "Profile updated successfully", data: updateResponse }
    }


    //////// PASSWORD RESET ////////
    async resetPasswordRequest(userEmail: string) {
        //fetch user information
        const user = await UserRepo.getUserByFields(userEmail)
        if (!user) {
            return { success: false, message: "An Account With this Email Does not Exist" }
        }

        //perform validation checks


        const token = await generateToken({ userEmail }, Configs.project.JWT.duration.short)

        const mailSendingResponse = await Mail.sendOne(userEmail, `${Configs.organization.name}: Password Reset Email`, await passwordResetEmail(token))
        if (!mailSendingResponse.success) {
            return { success: false, message: "Password Request Email Not Sent" }
        }
        return { success: true, message: "Password request email sent, check your inbox or spam folder" }
    }

    async resetPassword(token: string, passwordData: any) {
        const tokenValidationResponse = await verifyToken(token)

        if (!tokenValidationResponse.success) {
            return { success: false, message: "Password Request Token has Expired or is Invalid" }
        }

        //fetch user by email
        const user = await UserRepo.getUserByFields(tokenValidationResponse.decoded.userEmail)
        if (!user) {
            return { success: false, message: "Password Reset Failed, User Does not Exist" }
        }

        //check password
        const passwordComparisonResponse = checkPassword(passwordData.password, passwordData.confirmPassword)

        if (!passwordComparisonResponse.success) {
            return { success: false, message: passwordComparisonResponse.message }
        }


        //hash password
        const hashedPassword = hashPassword(passwordData.password)

        await UserRepo.updateUserById(user._id as string, { hashedPassword })

        return { success: true, message: "You have succesfully changed your password" }
    }



    // async oauth(oauthInfo:any){}


    ///// PRIVATE METHODS ///////
    private async loginData(userPublicProfile: any) {
        const authorizationToken = await generateToken(userPublicProfile, Configs.project.JWT.duration.long)
        return { user: userPublicProfile, authorizationToken }
    }

    private async createAccount(userInformation: IUserRegistrationInformation, emailVerified?: Boolean, password?: string) {

        //check if account with email already exists
        const userFound = await UserRepo.getUserByFields(userInformation.emailAddress)
        if (userFound != null) {
            return { success: false, message: `An Account With This Email Address Already Exist`, data: {} }
        }

        //create username
        const username = `${userInformation.firstName}${generateRandomToken(2)}`.toLowerCase()

        // create object
        const newUser: any = {
            _id: `user_${randomUUID()}`,
            names: {
                firstName: userInformation.firstName,
                lastName: userInformation.lastName
            },
            email: userInformation.emailAddress,
            username,
            image: "",
            accountType: userInformation.accountType,
            legalsAgreement: true
        }

        if (password) {
            newUser.passwordHash = await hashPassword(password)
        }

        if (emailVerified) {
            newUser.emailVerified = true
            newUser.emailVerifiedAt = new Date()
        }

        await UserRepo.createUser(newUser)

        //send verification email
        this.sendVerificationEmail(newUser._id)

        return { success: true, message: `Account created Successfully${emailVerified ? "" : ", check your email inbox or spam for verification code"}`, data: { userId: newUser._id } }
    }
}
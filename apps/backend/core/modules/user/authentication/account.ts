import serverResponse from "../../../utils/serverResponse";
import { Request, Response, NextFunction } from "express"
import { UserAccountServiceClass } from "../account.service";
import { ILoginInformation, IUserEmailVerificationData, IUserEmailVerificationRequest, IUserUpdateData } from "../types";
const UserAccountService = new UserAccountServiceClass()



export class UserAccountControllerClass {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const userInformation = req.body
            const registrationResponse = await UserAccountService.register(userInformation)
            if (registrationResponse.success != true) {
                serverResponse.handleError(
                    req,
                    res,
                    "badRequest",
                    registrationResponse.message
                );
                return
            }

            serverResponse.handleResponse(
                req,
                res,
                registrationResponse.data,
                "success",
                registrationResponse.message
            );
        } catch (error) {
            serverResponse.handleError(req, res, "internalServerError");
            console.log(error);
        }
    }

    async verifyEmailAddress(req: Request, res: Response, next: NextFunction) {
        try {
            const verificationInformation: IUserEmailVerificationData = req.body
            const verificationResponse = await UserAccountService.verifyEmailAddress(verificationInformation.userId, verificationInformation.verificationCode)
            if (!verificationResponse.success) {
                serverResponse.handleError(
                    req,
                    res,
                    "badRequest",
                    verificationResponse.message
                );
                return
            }
            serverResponse.handleResponse(
                req,
                res,
                [],
                "success",
                verificationResponse.message
            );
        } catch (error) {
            serverResponse.handleError(req, res, "internalServerError");
            console.log(error);
        }
    }

    async sendVerificationEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const verificationInformation: IUserEmailVerificationRequest = req.body
            const verificationResponse = await UserAccountService.sendVerificationEmail(verificationInformation.userId)
            if (!verificationResponse.success) {
                serverResponse.handleError(
                    req,
                    res,
                    "badRequest",
                    verificationResponse.message
                );
                return
            }
            serverResponse.handleResponse(
                req,
                res,
                [],
                "success",
                verificationResponse.message
            );
        } catch (error) {
            serverResponse.handleError(req, res, "internalServerError");
            console.log(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const loginInformation: ILoginInformation = req.body
            const loginReponse = await UserAccountService.login(loginInformation)
            if (!loginReponse.success) {
                serverResponse.handleError(
                    req,
                    res,
                    "unauthorized",
                    loginReponse.message
                );
                return
            }
            serverResponse.handleResponse(
                req,
                res,
                loginReponse.data,
                "success",
                loginReponse.message
            );
        } catch (error) {
            serverResponse.handleError(req, res, "internalServerError");
            console.log(error);
        }
    }

    async updateInformation(req: Request, res: Response, next: NextFunction) {
        try {
            const updateData: IUserUpdateData = req.body
            const userId = req.userId || ""
            const updateResponse = await UserAccountService.updateUserData(userId, updateData)
            if (!updateResponse.success) {
                serverResponse.handleError(
                    req,
                    res,
                    "unauthorized",
                    updateResponse.message
                );
                return
            }
            serverResponse.handleResponse(
                req,
                res,
                updateResponse.data,
                "success",
                updateResponse.message
            );
        } catch (error:any) {
            serverResponse.handleError(req, res, "internalServerError", error.message);
            console.log(error);
        }
    }

    async resetPasswordRequest(req: Request, res: Response, next: NextFunction) {
        try {
            const {userEmail} = req.body
            const requestResponse = await UserAccountService.resetPasswordRequest(userEmail)
            if (!requestResponse.success) {
                serverResponse.handleError(
                    req,
                    res,
                    "unauthorized",
                    requestResponse.message
                );
                return
            }
            serverResponse.handleResponse(
                req,
                res,
                [],
                "success",
                requestResponse.message
            );
        } catch (error:any) {
            serverResponse.handleError(req, res, "internalServerError", error.message);
            console.log(error);
        }
    }

    async resetPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const {token} = req.params
            const resetResponse = await UserAccountService.resetPassword(token, req.body)
            if (!resetResponse.success) {
                serverResponse.handleError(
                    req,
                    res,
                    "unauthorized",
                    resetResponse.message
                );
                return
            }
            serverResponse.handleResponse(
                req,
                res,
                [],
                "success",
                resetResponse.message
            );
        } catch (error:any) {
            serverResponse.handleError(req, res, "internalServerError", error.message);
            console.log(error);
        }
    }
}
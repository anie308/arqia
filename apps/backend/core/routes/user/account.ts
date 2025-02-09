import express from "express";
import {UserAccountControllerClass} from "../../modules/user/authentication/account";
import { validate } from "../../middlewares/validation";
import { accountCreationDTO, emailVerificationDTO, emailVerificationRequestDTO, loginDTO, resetPasswordDTO, resetPasswordRequestDTO } from "../../modules/user/dto";
import { bearerValidation } from "../../middlewares/bearerValidator";
import { validateUser } from "../../middlewares/userValidation";
const UserAccountController = new UserAccountControllerClass()

const router = express.Router();

router.post("/register", validate(accountCreationDTO), UserAccountController.register)

router.post("/request-email-verification", validate(emailVerificationRequestDTO), UserAccountController.sendVerificationEmail)
router.post("/verify-email", validate(emailVerificationDTO), UserAccountController.verifyEmailAddress)

router.post("/login", validate(loginDTO), UserAccountController.login)

router.post("/update", bearerValidation, validateUser, UserAccountController.updateInformation)

router.post("/request-password-reset", validate(resetPasswordRequestDTO), UserAccountController.resetPasswordRequest)
router.post("/reset-password/:token", validate(resetPasswordDTO), UserAccountController.resetPassword)

export = router;
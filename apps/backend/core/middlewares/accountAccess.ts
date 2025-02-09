import { NextFunction, Request, Response } from "express"
import serverResponse from "../utils/serverResponse"
import { bearerExtractor } from "../utils/bearerExtractor"
import { CustomRequest, CustomResponse } from "../utils/serverResponse/types"

export const validateUser = async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
    const userInfo = await bearerExtractor(req)
    if (userInfo.success == false) {
        serverResponse.handleError(req, res, "badRequest", "Session Expired! Please Login")
        return
    }

    //user is not suspended
    //user is not banned
    //user email is verified
    next()
}


//user has date of birth
//account is a mentor
//account is an admin
//account is a student

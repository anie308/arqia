import { NextFunction, Request, Response } from "express"
import serverResponse from "../utils/serverResponse"
import { bearerExtractor } from "../utils/bearerExtractor"
import { UserServiceClass } from "../modules/user/user.service"
import { CustomRequest, CustomResponse } from "../utils/serverResponse/types"
const UserService = new UserServiceClass()

export const validateUser = async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
    const userInfo = await bearerExtractor(req)
    if (userInfo.success == false) {
        serverResponse.handleError(req, res, "badRequest", "Session Expired! Please Login")
        return
    }
    const userId = userInfo.decoded._id
    req.userId = userId

    //check if user exists
    const user = await UserService.getUserById(userId)
    if (!user) {
        serverResponse.handleError(req, res, "badRequest", "Invalid Authorization Token")
        return
    }
    
    //Add more conditions
    next()
}
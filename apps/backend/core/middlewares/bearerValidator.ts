import { NextFunction, Request, Response } from "express"
import serverResponse from "../utils/serverResponse"
import { verifyToken } from "../utils/token"
import { CustomRequest, CustomResponse } from "../utils/serverResponse/types"

export const bearerValidation = async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
    const { authorization } = req.headers    
    const bearerValue: any = authorization?.split(" ")[1]

    //Check if an authorization token exists
    if (!bearerValue) {
        serverResponse.handleError(req, res, "badRequest", "No Authorization Token Provided");
        return
    }

    //Check if the token is of JWT length
    if (bearerValue.length < 100) {
        serverResponse.handleError(req, res, "internalServerError", "Invalid Authorization Token")
        return
    }

    //check if the token is jwt verified
    const tokenVerification = await verifyToken(bearerValue)
    if(tokenVerification.success == false){
        serverResponse.handleError(req, res, "unauthorized", "Session Expired! Please Login")
        return
    }
    next()
}
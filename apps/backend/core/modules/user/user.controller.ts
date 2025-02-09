import serverResponse from "../../utils/serverResponse";

import { Request, Response, NextFunction } from "express"

class UserController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            serverResponse.handleResponse(
                req,
                res,
                "",
                "success",
                "Account created successfully, proceed to email verification"
            );
        } catch (error) {
            serverResponse.handleError(req, res, "internalServerError");
            console.log(error);
        }
    }
}

export = UserController
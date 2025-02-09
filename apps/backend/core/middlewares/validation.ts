import serverResponse from "../utils/serverResponse";

import { NextFunction, Request, Response, RequestHandler } from "express";
import Joi from "joi";
import { CustomRequest } from "../utils/serverResponse/types";

export default class ValidationMiddleware {
  static validate(schema: Joi.ObjectSchema): RequestHandler {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);
      if (error) {
        serverResponse.handleError(req, res, "badRequest", error.details[0].message)
      } else {
        next();
      }
    };
  }
}

export const { validate } = ValidationMiddleware;
import { Request, Response } from "express";

interface ResponseFormat {
  [key: string]: [number, string, boolean];
}
interface CustomRequest extends Request {
    id?: any;
}
interface CustomResponse extends Response { }

export interface requestStatus {
  success: Boolean
  message: string,
  data?: object
}

export { ResponseFormat, CustomRequest, CustomResponse }
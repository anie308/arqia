import { TransportOptions } from "nodemailer";

export interface INodemailerTransporter extends TransportOptions {
    host:string
}
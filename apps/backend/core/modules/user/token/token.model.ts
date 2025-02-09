import { Schema, model } from "mongoose";
import { IVerificationCodeEntry } from "./types";
const emailVerificationCodeSchema = new Schema(
  {
    code: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

const emailVerificationCodeModel = model<IVerificationCodeEntry>("Email Verification Code", emailVerificationCodeSchema);
export default emailVerificationCodeModel;
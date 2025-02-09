import Joi from "joi";
import { ENotificationType } from "./types";

export const createNotificationDTO = Joi.object({
  userId: Joi.string().required(),
  message: Joi.string().required(),
  notificationType: Joi.string().valid(...Object.values(ENotificationType)).required(),
  relatedItemId: Joi.string(),
}).options({ allowUnknown: false });
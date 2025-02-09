import { Schema, model } from "mongoose";
import { ENotificationType } from "./types";

const notificationSchema = new Schema(
  {
    _id: { type: String, required: true },
    userId: { type: String, required: true },
    message: { type: String, required: true },
    notificationType: { type: String, enum: Object.values(ENotificationType), required: true },
    readAt: { type: Date, default: null },
    relatedItemId: { type: String },
    deletedAt: { type: Date},
  },
  { timestamps: true }
);

const notificationModel = model("Notification", notificationSchema);
export = notificationModel;
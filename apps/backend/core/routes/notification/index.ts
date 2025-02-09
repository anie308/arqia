import express from "express";
import NotificationController from "../../modules/notification/notification.controller";
import { validate } from "../../middlewares/validation";
import { createNotificationDTO } from "../../modules/notification/dto";
import { bearerValidation } from "../../middlewares/bearerValidator";
import { validateUser } from "../../middlewares/userValidation";

const router = express.Router();
const notificationController = new NotificationController();

router.post(
  "/create",
  bearerValidation,
  validateUser,
  validate(createNotificationDTO),
  notificationController.createNotification
);

router.get(
  "/",
  bearerValidation,
  validateUser,
  notificationController.getNotifications
);

router.get(
  "/unread",
  bearerValidation,
  validateUser,
  notificationController.getUnreadNotifications
);

router.put(
  "/:notificationId/read",
  bearerValidation,
  validateUser,
  notificationController.markNotificationAsRead
);

router.put(
  "/read-all",
  bearerValidation,
  validateUser,
  notificationController.markAllNotificationsAsRead
);

// Delete a notification
router.delete(
  "/:notificationId",
  bearerValidation,
  validateUser,
  notificationController.deleteNotification
);

export = router;
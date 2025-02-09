import { Request, Response, NextFunction } from "express";
import { NotificationServiceClass } from "./notification.service";
import serverResponse from "../../utils/serverResponse";
import { bearerExtractor } from "../../utils/bearerExtractor";

const NotificationService = new NotificationServiceClass();

class NotificationController {
  async createNotification(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await NotificationService.createNotification(req.body);
      if (!result.status) {
        return serverResponse.handleError(req, res, "badRequest", result.message);
      }
      if (!result.data) {
        return serverResponse.handleError(req, res, "forbidden", "An Error Occured While Performing This Operation");
      }
      serverResponse.handleResponse(req, res, result.data, "success", result.message);
    } catch (error: any) {
      serverResponse.handleError(req, res, "internalServerError", error.message);
    }
  }

  async getNotifications(req: Request, res: Response, next: NextFunction) {
    try {
      const extractedToken = await bearerExtractor(req);
      if (!extractedToken.success) {
        return serverResponse.handleError(req, res, "unauthorized", "Session Expired, Please Login!");
      }
      const userId = extractedToken.decoded._id;
      const result = await NotificationService.getNotificationsByUserId(userId);
      if (!result.status) {
        return serverResponse.handleError(req, res, "notFound", result.message);
      }
      if (!result.data) {
        return serverResponse.handleError(req, res, "forbidden", "An Error Occured While Performing This Operation");
      }
      serverResponse.handleResponse(req, res, result.data, "success", result.message);
    } catch (error: any) {
      serverResponse.handleError(req, res, "internalServerError", error.message);
    }
  }

  async getUnreadNotifications(req: Request, res: Response, next: NextFunction) {
    try {
      const extractedToken = await bearerExtractor(req);
      if (!extractedToken.success) {
        return serverResponse.handleError(req, res, "unauthorized", "Session Expired, Please Login!");
      }
      const userId = extractedToken.decoded._id;
      const result = await NotificationService.getUnreadNotificationsByUserId(userId);
      if (!result.status) {
        return serverResponse.handleError(req, res, "notFound", result.message);
      }
      if (!result.data) {
        return serverResponse.handleError(req, res, "forbidden", "An Error Occured While Performing This Operation");
      }
      serverResponse.handleResponse(req, res, result.data, "success", result.message);
    } catch (error: any) {
      serverResponse.handleError(req, res, "internalServerError", error.message);
    }
  }

  async markNotificationAsRead(req: Request, res: Response, next: NextFunction) {
    try {
      const { notificationId } = req.params;
      const result = await NotificationService.markNotificationAsRead(notificationId);
      if (!result.status) {
        return serverResponse.handleError(req, res, "notFound", result.message);
      }
      if (!result.data) {
        return serverResponse.handleError(req, res, "forbidden", "An Error Occured While Performing This Operation");
      }
      serverResponse.handleResponse(req, res, result.data, "success", result.message);
    } catch (error: any) {
      serverResponse.handleError(req, res, "internalServerError", error.message);
    }
  }

  async markAllNotificationsAsRead(req: Request, res: Response, next: NextFunction) {
    try {
      const extractedToken = await bearerExtractor(req);
      if (!extractedToken.success) {
        return serverResponse.handleError(req, res, "unauthorized", "Session Expired, Please Login!");
      }
      const userId = extractedToken.decoded._id;
      const result = await NotificationService.markAllNotificationsAsRead(userId);
      if (!result.status) {
        return serverResponse.handleError(req, res, "badRequest", result.message);
      }
      serverResponse.handleResponse(req, res, [], "success", result.message);
    } catch (error: any) {
      serverResponse.handleError(req, res, "internalServerError", error.message);
    }
  }

  async deleteNotification(req: Request, res: Response, next: NextFunction) {
    try {
      const { notificationId } = req.params;
      const result = await NotificationService.deleteNotification(notificationId);
      if (!result.status) {
        return serverResponse.handleError(req, res, "notFound", result.message);
      }
      serverResponse.handleResponse(req, res, [], "success", result.message);
    } catch (error: any) {
      serverResponse.handleError(req, res, "internalServerError", error.message);
    }
  }
}

export = NotificationController;
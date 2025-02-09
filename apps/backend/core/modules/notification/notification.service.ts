import { randomUUID } from "crypto";
import { NotificationRepositoryClass } from "./notification.repo";
import { INotification, INotificationInput } from "./types";

const NotificationRepo = new NotificationRepositoryClass();

export class NotificationServiceClass {
  async createNotification(notificationData: Partial <INotification>): Promise<{ status: boolean; message: string; data: any }> {
    try {
      notificationData._id = `notification_${randomUUID()}`
      const notification = await NotificationRepo.createNotification(notificationData);
      return { status: true, message: "Notification created successfully", data: notification };
    } catch (error) {
      return { status: false, message: "Failed to create notification", data: null };
    }
  }

  async notify(notificationData: Partial <INotification>, additionalSources?: object) {
    try {

      //check additional notification sources here like email or push
      //check if user has this sources enabled
      notificationData._id = `notification_${randomUUID()}`
      const notification = await NotificationRepo.createNotification(notificationData);
      return { status: true, message: "Notification created successfully", data: notification };
    } catch (error) {
      return { status: false, message: "Failed to create notification", data: null };
    }
  }
  async getNotificationsByUserId(userId: string): Promise<{ status: boolean; message: string; data: any }> {
    try {
      const notifications = await NotificationRepo.getNotificationsByUserId(userId);
      return { status: true, message: "Notifications fetched successfully", data: notifications };
    } catch (error) {
      return { status: false, message: "Failed to fetch notifications", data: null };
    }
  }

  async getUnreadNotificationsByUserId(userId: string): Promise<{ status: boolean; message: string; data: any }> {
    try {
      const notifications = await NotificationRepo.getUnreadNotificationsByUserId(userId);
      return { status: true, message: "Unread notifications fetched successfully", data: notifications };
    } catch (error) {
      return { status: false, message: "Failed to fetch unread notifications", data: null };
    }
  }

  async markNotificationAsRead(notificationId: string): Promise<{ status: boolean; message: string; data: any }> {
    try {
      const notification = await NotificationRepo.markNotificationAsRead(notificationId);
      if (!notification) {
        return { status: false, message: "Notification not found", data: null };
      }
      return { status: true, message: "Notification marked as read", data: notification };
    } catch (error) {
      return { status: false, message: "Failed to mark notification as read", data: null };
    }
  }

  async markAllNotificationsAsRead(userId: string): Promise<{ status: boolean; message: string }> {
    try {
      await NotificationRepo.markAllNotificationsAsRead(userId);
      return { status: true, message: "All notifications marked as read" };
    } catch (error) {
      return { status: false, message: "Failed to mark all notifications as read" };
    }
  }

  async deleteNotification(notificationId: string): Promise<{ status: boolean; message: string }> {
    try {
      const result = await NotificationRepo.markNotificationAsDeleted(notificationId);
      if (!result) {
        return { status: false, message: "Notification not found" };
      }
      return { status: true, message: "Notification deleted successfully" };
    } catch (error) {
      return { status: false, message: "Failed to delete notification" };
    }
  }
}

export const Notification = new NotificationServiceClass()
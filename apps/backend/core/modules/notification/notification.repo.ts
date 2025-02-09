import NotificationModel from "./notification.model";
import { INotification } from "./types";

export class NotificationRepositoryClass {
  async createNotification(data: Partial <INotification>) {
    try {
      const notification = await NotificationModel.create(data);
      return notification; 
    } catch (error) {
      console.log(error)
    }
  }

  async getNotificationsByUserId(userId: string) {
    return await NotificationModel.find({ userId, deletedAt: null }).sort({ createdAt: -1 });
  }

  async getUnreadNotificationsByUserId(userId: string) {
    return await NotificationModel.find({ userId, readAt: null,deletedAt: null }).sort({ createdAt: -1 });
  }

  async markNotificationAsRead(notificationId: string) {
    return await NotificationModel.findByIdAndUpdate(
      notificationId,
      { readAt: new Date() },
      { new: true }
    );
  }

  async markAllNotificationsAsRead(userId: string) {
    await NotificationModel.updateMany(
      { userId, readAt: null,deletedAt: null },
      { readAt: new Date() }
    );
  }

  async deleteNotification(notificationId: string) {
    return await NotificationModel.findByIdAndDelete(notificationId);
  }

  async markNotificationAsDeleted(notificationId: string) {
    return await NotificationModel.findByIdAndUpdate(notificationId, { deletedAt: new Date() });
  }
}
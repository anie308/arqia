import { Document } from 'mongoose';

export enum ENotificationType {
  NEW_COURSE = 'NEW_COURSE',
  NEW_LESSON = 'NEW_LESSON',
  COURSE_ENROLLMENT = 'COURSE_ENROLLMENT',
  COMMUNITY_INVITATION = 'COMMUNITY_INVITATION',
  COMMUNITY_UPDATE = 'COMMUNITY_UPDATE',
  DIRECT_MESSAGE = 'DIRECT_MESSAGE',
  ALERT = 'ALERT'
}

export interface INotification extends Document {
  _id: string;
  userId: string;
  message: string;
  notificationType: ENotificationType;
  readAt: Date | null;
  relatedItemId?: string;
  deletedAt:Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface INotificationInput {
  userId: string;
  message: string;
  notificationType: ENotificationType;
  relatedItemId?: string;
}
import { Expo } from 'expo-server-sdk';

const expo = new Expo();

export const sendNotification = async (message: string, token: string) => {
  const messages = [];
  messages.push({
    to: token,
    sound: 'default',
    body: message,
    data: { message },
  });

  const chunks = expo.chunkPushNotifications(messages);

  for (const chunk of chunks) {
    try {
      await expo.sendPushNotificationsAsync(chunk);
    } catch (error) {
      console.error(error);
    }
  }
};
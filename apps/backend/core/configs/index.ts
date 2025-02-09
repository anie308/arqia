import logger from "../utils/logger";

require("dotenv").config();
const configuration = {
  project: {
    name: process.env.PROJECT_NAME,
    port: process.env.PORT,
    docs: process.env.DOCS,
    enviroment:process.env.NODE_ENV,
    subscriptionRoutineCronExpression: process.env.SUBSCRIPTION_ROUTINE_CRON_EXPRESSION || "0 0 * * *",
    JWT: {
      key: process.env.JWT_KEY,
      duration: {
        long: process.env.JWT_Long_Duration,
        medium: process.env.JWT_Medium_Duration,
        short: process.env.JWT_Short_Duration,
      }
    },
  },
  constants: {
    frontendUrl: process.env.FRONTEND_DEPLOYMENT_URL,
    verifyEmailUrl: `${process.env.FRONTEND_DEPLOYMENT_URL}${process.env.EMAIL_VERIFICATION_ROUTE}`,
    resetPasswordUrl: `${process.env.FRONTEND_DEPLOYMENT_URL}${process.env.PASSWORD_RESET_URL}`
  },
  // mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}`,
  mongoUrl: `${process.env.MONGODB_URL}`,

  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    port: parseInt(process.env.MAIL_PORT || "2525"),
    host: process.env.MAIL_HOST,
    address: process.env.MAIL_ADDRESS,
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET
  },
  sec: {
    bcryptRounds: parseInt(process.env.BYCRPYT_ROUNDS || "10"),
  },
  firebase: {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
  }, organization: {
    name: process.env.ORGANIZATION_NAME
  },
  payment: {
    paystack: {
      secretKey: process.env.PAYSTACK_SECRET_KEY,
      publicKey: process.env.PAYSTACK_PUBLIC_KEY
    }
  }
};
logger.info(`MongoDB Connect: ${configuration.mongoUrl}`)
export const Configs = configuration;
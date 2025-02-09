import { Document } from "mongoose";

// Enum for account types
export enum EAccountType {
  Student = "student",
  Mentor = "mentor",
  Admin = "admin",
}

export interface IUser extends Document {
  names: {
    firstName: string;
    otherNames?: string;
    lastName: string;
  };
  about:string,
  email: string;
  isEmailVerified: boolean;
  emailVerifiedAt: Date;
  username: string;
  dateOfBirth: Date;
  image: string;
  socialInformation: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
    telegram?: string;
    discord?: string;
  };
  googleOauthUserId?: string;
  passwordHash?: string;
  notifications:{
    messageAlerts:boolean, 
    profileAlerts:boolean,
    profileGuidance:boolean,
    featuredProfile:boolean
  },
  newsLetters:{
    regular:boolean,
    annoncements:boolean,
  },
  validation: {
    access: {
      isBanned: boolean;
      bannedAt?: Date;
      bannedFor?: string;
      isSuspended: boolean;
      suspendedAt?: Date;
      suspendedFor?: string;
    };
    identity: {
      isAccountVerified: boolean;
      verifiedAt?: string;
    };
  };
  accountType: EAccountType;
  accountValid: boolean;
  legalsAgreement: boolean;
  isDeleted: boolean;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}


export interface IUserRegistrationInformation {
  firstName:string,
  lastName:string,
  emailAddress:string,
  accountType:string
}

export interface IUserEmailVerificationData{
  userId:string,
  verificationCode:string
}

export interface IUserEmailVerificationRequest{
  userId:string,
}

export interface ILoginInformation{
  emailAddressOrUsername:string,
  password:string
}


export interface IUserUpdateData {
  names?: {
    firstName?: string;
    otherNames?: string;
    lastName?: string;
  };
  about?: string;
  username?: string;
  dateOfBirth?: Date;
  image?: string;
  socialInformation?: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
    telegram?: string;
    discord?: string;
  };
  notifications?: {
    messageAlerts?: boolean;
    profileAlerts?: boolean;
    profileGuidance?: boolean;
    featuredProfile?: boolean;
  };
  newsLetters?: {
    regular?: boolean;
    announcements?: boolean;
  };
}
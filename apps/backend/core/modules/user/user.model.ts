import { Schema, model } from "mongoose";
import { EAccountType, IUser } from "./types";

const userSchema = new Schema(
  {
    _id: { type: String, required: true },
    names: {
      firstName: { type: String, required: true },
      otherNames: { type: String },
      lastName: { type: String, required: true },
    },
    about: { type: String, default: " " },
    email: { type: String, required: true, unique: true },
    isEmailVerified: { type: Boolean, default: false },
    emailVerifiedAt: { type: Date },
    username: { type: String, required: true, unique: true },
    usernameChangedAt: { type: Date },
    dateOfBirth: { type: Date, default: null },
    image: { type: String, default: " " },
    socialInformation: {
      facebook: { type: String },
      twitter: { type: String },
      youtube: { type: String },
      telegram: { type: String },
      discord: { type: String },
    },
    googleOauthUserId: { type: String, required: false},
    passwordHash: { type: String },
    notifications: {
      messageAlerts: { type: Boolean, default: false },
      profileAlerts: { type: Boolean, default: false },
      profileGuidance: { type: Boolean, default: false },
      featuredProfile: { type: Boolean, default: false }
    },
    newsLetters: {
      regular: { type: Boolean, default: false },
      annoncements: { type: Boolean, default: false },
    },
    validation: {
      access: {
        isBanned: { type: Boolean, default: false },
        bannedAt: { type: Date },
        bannedFor: { type: String },
        isSuspended: { type: Boolean, default: false },
        suspendedAt: { type: Date },
        suspendedFor: { type: String },
      },
      identity: {
        isAccountVerified: { type: Boolean, default: false },
        verifiedAt: { type: String }
      },
    },
    // accountType: { type: String, required: true, enum: Object.values(EAccountType) },
    accountValid: { type: Boolean, required: true, default: false },
    legalsAgreement: { type: Boolean, required: true, default: false },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);


userSchema.methods.verifyEmail = function () {
  this.isEmailVerified = true
  this.emailVerifiedAt = new Date()
}

userSchema.methods.suspend = function (suspensionReason: string) {
  this.validation.access.isSuspended = true
  this.validation.access.suspendedAt = new Date()
  this.validation.access.suspendedFor = suspensionReason ? suspensionReason : " "
}

userSchema.methods.unSuspend = function () {
  this.validation.access.isSuspended = false
  this.validation.access.suspendedAt = null
  this.validation.access.suspendedFor = " "
}

userSchema.methods.canLogin = function () {
  if (this.validation.access.isBanned = true) {
    return { status: this.validation.access.isBanned, message: this.validation.access.bannedFor }
  }
}

userSchema.methods.getPublicProfile = function () {
  const userObject = this.toObject();
  delete userObject.passwordHash;
  delete userObject.googleOauthUserId;
  return userObject;
};


const userModel = model<IUser>("User", userSchema);
export = userModel;
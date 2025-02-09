import Joi from "joi";

export const accountCreationDTO = Joi.object({
    firstName: Joi.string().min(3).max(64).required(),
    lastName: Joi.string().min(3).max(64).required(),
    password: Joi.string().min(3).max(24).required(),
    confirmPassword: Joi.string().min(3).max(24).required(),
    emailAddress: Joi.string().email().required(),
    // accountType: Joi.string().valid("student", "mentor", "admin").required(),
}).options({ allowUnknown: false });

export const emailVerificationDTO = Joi.object({
    userId:Joi.string().min(3).max(64).required(),
    verificationCode:Joi.string().min(3).max(6).required()
}).options({ allowUnknown: false });

export const emailVerificationRequestDTO = Joi.object({
    userId:Joi.string().min(3).max(64).required(),
}).options({ allowUnknown: false });

export const loginDTO = Joi.object({
    emailAddressOrUsername: Joi.string().required(),
    password: Joi.string().min(3).max(24).required(),
}).options({ allowUnknown: false });


export const userUpdateDTO = Joi.object({
  names: Joi.object({
    firstName: Joi.string().trim(),
    otherNames: Joi.string().trim(),
    lastName: Joi.string().trim(),
  }),
  about: Joi.string().trim(),
  username: Joi.string().trim(),
  dateOfBirth: Joi.date(),
  image: Joi.string().uri(),
  socialInformation: Joi.object({
    facebook: Joi.string().uri(),
    twitter: Joi.string().uri(),
    youtube: Joi.string().uri(),
    telegram: Joi.string().uri(),
    discord: Joi.string().uri(),
  }),
  notifications: Joi.object({
    messageAlerts: Joi.boolean(),
    profileAlerts: Joi.boolean(),
    profileGuidance: Joi.boolean(),
    featuredProfile: Joi.boolean(),
  }),
  newsLetters: Joi.object({
    regular: Joi.boolean(),
    announcements: Joi.boolean(),
  })
}).options({ allowUnknown: false });

export const resetPasswordRequestDTO = Joi.object({
  userEmail:Joi.string().required().min(3).max(64).email()
}).options({ allowUnknown: false });

export const resetPasswordDTO = Joi.object({
  password:Joi.string().required().min(3).max(64),
  confirmPassword:Joi.string().required().min(3).max(32)
}).options({ allowUnknown: false });
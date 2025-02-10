import Joi from "joi";


export const postCreationDTO = Joi.object({
    content: Joi.string().min(3).max(1024).required(),
    userId: Joi.string().min(3).max(64).required(),
    // accountType: Joi.string().valid("student", "mentor", "admin").required(),
}).options({ allowUnknown: false });

export const postUpdateDTO = Joi.object({
  content: Joi.string().min(3).max(1024).required(),
}).options({ allowUnknown: false });

export const postDeleteDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
}).options({ allowUnknown: false });

export const postLikeDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
}).options({ allowUnknown: false });

export const postCommentDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  comment:Joi.string().min(3).max(1024).required()
}).options({ allowUnknown: false });

export const postCommentDeleteDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required()
}).options({ allowUnknown: false });

export const postCommentLikeDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required()
}).options({ allowUnknown: false });

export const postCommentReplyDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required(),
  reply:Joi.string().min(3).max(1024).required()
}).options({ allowUnknown: false });

export const postCommentReplyDeleteDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required(),
  replyId:Joi.string().min(3).max(64).required()
}).options({ allowUnknown: false });

export const postCommentReplyLikeDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required(),
  replyId:Joi.string().min(3).max(64).required()
}).options({ allowUnknown: false });

export const postCommentReplyUpdateDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required(),
  replyId:Joi.string().min(3).max(64).required(),
  reply:Joi.string().min(3).max(1024).required()
}).options({ allowUnknown: false });

export const postCommentUpdateDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required(),
  comment:Joi.string().min(3).max(1024).required()
}).options({ allowUnknown: false });

export const postCommentLikeDeleteDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required()
}).options({ allowUnknown: false });

export const postCommentReplyLikeDeleteDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
  commentId:Joi.string().min(3).max(64).required(),
  replyId:Joi.string().min(3).max(64).required()
}).options({ allowUnknown: false });

export const postLikeDeleteDTO = Joi.object({
  postId:Joi.string().min(3).max(64).required(),
}).options({ allowUnknown: false });


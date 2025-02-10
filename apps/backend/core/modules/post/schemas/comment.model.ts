import { Schema, model } from "mongoose";
import { IComment } from "../types";

const commentSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comment: { type: String, required: true },
    likesCount: { type: Number, default: 0 },
    likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }], // References replies
  },
  { timestamps: true }
);

const CommentModel = model<IComment>("Comment", commentSchema);
export default CommentModel;

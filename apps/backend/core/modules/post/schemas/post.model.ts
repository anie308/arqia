import { Schema, model } from "mongoose";
import { IPost } from "../types";


// const postSchema = new Schema(
//   {
//     userId: {  required: true, type: Schema.Types.ObjectId, ref: "User" },
//     content: { type: String, required: true },
//     likes: { type: Number, default: 0,  },
//     likedBy: [{ type: String }],
//     shares: { type: Number, default: 0 },
//     comments: [
//       {
//         _id: { type: String, required: true },
//         comment: { type: String, required: true },
//         likes: { type: Number, default: 0 },
//         likedBy: [{ type: String }],
//         replies: [
//           {
//             _id: { type: String, required: true },
//             reply: { type: String, required: true },
//             likes: { type: Number, default: 0 },
//             likedBy: [{ type: String }],
//           },
//         ],
//       },
//     ],
//   },
//     { timestamps: true }
// );

const postSchema = new Schema(
  {
    userId: { type: String, ref: "User", required: true },
    content: { type: String, required: true },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    likedBy: [{ type: String, ref: "User" }],
    comments : [{ type: Schema.Types.ObjectId, ref: "Comment" }]
  },
  { timestamps: true }
);

const postModel = model<IPost>("Post", postSchema);
export = postModel;
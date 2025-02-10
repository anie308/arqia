import { Schema, model } from "mongoose";
import { IFriend } from "../types";


const friendSchema = new Schema(
    {
      user: {
        type: String,
        ref: "User", // Reference to the User model
        required: true,
      },
      friends: [
        {
          type: String,
          ref: "User", // Reference to the User model
        },
      ],
    },
    { timestamps: true }
  );


  const friendModel = model<IFriend>("Friend", friendSchema);
  export = friendModel;
  
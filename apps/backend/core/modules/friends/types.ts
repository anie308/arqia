import { Document } from "mongoose";


export interface IFriend extends Document {
    user: string;
    friends: string[];
}
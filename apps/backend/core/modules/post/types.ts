import { Document } from "mongoose";


export interface IPost extends Document {
    userId: string;
    content: string;
    likesCount: number;
    commentsCount: number;
}

export interface IComment extends Document {
    postId: string;
    userId: string;
    comment: string;
    likesCount: number;
    replies: string[]; // Array of reply comment IDs
}


export interface ILike extends Document {
    userId: string;
    postId?: string;
    commentId?: string;
}



export interface IPostCreation {
    userId: string;
    content: string;
}

export interface IPostUpdate {
    content?: string;
}




export interface ICommentCreation {
    postId: string;
    userId: string;
    comment: string;
}

export interface ICommentUpdate {
    comment?: string;
}


export interface ILikeCreation {
    userId: string;
    postId?: string;
    commentId?: string;
}
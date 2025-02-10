import { IPost } from './types';
import serverResponse from "../../utils/serverResponse";
import { Request, Response, NextFunction } from "express"

import { PostRepositoryClass } from "./post.repo";
const PostController = new PostRepositoryClass();

export class PostControllerClass {
    async createPost(req: Request, res: Response, next: NextFunction) {
        try {
            const { content, userId } = req.body
            console.log(req.body)
            if (!content || !userId) {
                return serverResponse.handleError(
                    req,
                    res,
                    "badRequest",
                    "All fields are required"
                );
            }
            const postCreationResponse = await PostController.createPost({userId, content}as IPost)
            if (postCreationResponse.success !== true) {
                return serverResponse.handleError(
                    req,
                    res,
                    "badRequest",
                    postCreationResponse.message
                );

            }

            return serverResponse.handleResponse(
                req,
                res,
                postCreationResponse.data,
                "success",
                postCreationResponse.message
            );
        } catch (error) {
            console.log(error);
            return serverResponse.handleError(req, res, "internalServerError");

        }
    }
}
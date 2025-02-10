import postModel from "./schemas/post.model";
import { IPost } from "./types";

export class PostRepositoryClass {
    async createPost(data: IPost) {
        const post = await postModel.create(data);
        return { success: true, message: "Post created successfully", data: post };
    }

    async getAllPosts() {
        return await postModel.find();
    }

    async getPostById(postId: string) {
        const post = await postModel.findById(postId);
        return post;
    }

    async updatePostById(postId: string, updateData: any) {
        const updateResponse = await postModel.findByIdAndUpdate(
            postId,
            { $set: updateData },
            { new: true, runValidators: true }
        ).lean();

        if (!updateResponse) {
            return null;
        }

        return updateResponse;

    }

    async deletePost(userId: string, postId: string) {
        const deleteResponse = await postModel.deleteOne({ _id: postId, userId });
        return deleteResponse;

    }

    async likePost(userId: string, postId: string) {
        const likeResponse = await postModel.updateOne(
            { _id: postId },
            { $addToSet: { likedBy: userId }, $inc: { likes: 1 } }
        );
        return likeResponse;
    }

    async unlikePost(userId: string, postId: string) {
        const unlikeResponse = await postModel.updateOne(
            { _id: postId },
            { $pull: { likedBy: userId }, $inc: { likes: -1 } }
        );
        return unlikeResponse;
    }

    async commentOnPost(userId: string, postId: string, comment: string) {
        const commentResponse = await postModel.updateOne(
            { _id: postId },
            {
                $push: {
                    comments: {
                        _id: userId,
                        comment,
                        likes: 0,
                        likedBy: [],
                        replies: []
                    }
                }
            }
        );
        return commentResponse;
    }
}
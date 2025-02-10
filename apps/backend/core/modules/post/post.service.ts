import { NotificationRepositoryClass } from "../notification/notification.repo";
import { PostRepositoryClass } from "./post.repo";
import { IPost } from "./types";


const PostRepo = new PostRepositoryClass();
const NofiticationRepo = new NotificationRepositoryClass();


export class PostServiceClass {
    
    async createPost(postInformation: IPost) {
        const post = await PostRepo.createPost(postInformation);
        if (!post) {
            return { success: false, message: "Failed to create post" }
        }
        return { success: true, message: "Post created successfully" }
    }

    async getPostById(postId: string) {
        const post = await PostRepo.getPostById(postId);
        if (!post) {
            return { success: false, message: "Post not found" }
        }
        return { success: true, message: "Post found", post }
    }

    async updatePost(postId: string, postInformation: any) {
        const post = await PostRepo.updatePostById(postId, postInformation);
        if (!post) {
            return { success: false, message: "Failed to update post" }
        }
        return { success: true, message: "Post updated successfully" }
    }

    async deletePost(userId: string, postId: string) {
        const post = await PostRepo.deletePost(userId, postId);
        if (!post) {
            return { success: false, message: "Failed to delete post" }
        }
        return { success: true, message: "Post deleted successfully" }
    }

    async likePost(userId: string, postId: string) {
        const post = await PostRepo.likePost(userId, postId);
        if (!post) {
            return { success: false, message: "Failed to like post" }
        }
        return { success: true, message: "Post liked successfully" }
    }

    async unlikePost(userId: string, postId: string) {
        const post = await PostRepo.unlikePost(userId, postId);
        if (!post) {
            return { success: false, message: "Failed to unlike post" }
        }
        return { success: true, message: "Post unliked successfully" }
    }

    async commentOnPost(userId: string, postId: string, comment: string) {
        const post = await PostRepo.commentOnPost(userId, postId, comment);
        if (!post) {
            return { success: false, message: "Failed to comment on post" }
        }
        return { success: true, message: "Commented on post successfully" }
    }

}
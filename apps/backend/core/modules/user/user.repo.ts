import UserModel from "./user.model";
import { IUser, IUserUpdateData } from "./types";

export class UserRepositoryClass {
    async createUser(data: IUser) {
        const user = await UserModel.create(data);
        return user;
    }

    async getAllUsers() {
        return await UserModel.find({ isDeleted: false });
    }

    async getUserById(id: string) {
        const user = await UserModel.findById(id);
        return user
    }

    async getUserByFields(data: string) {
        return await UserModel.findOne({
            $or: [
                { email: data, isDeleted: false },
                { username: data, isDeleted: false },
            ],
        }).lean();
    }

    async getUserPublicProfile(id: string) {
        const user = await UserModel.findById(id).lean();
        if (user) {
            delete user.passwordHash;
            delete user.googleOauthUserId;

            return user
        }
        return null
    }

    async updateUserById(id: string, updateData: any) {
        const updateResponse = await UserModel.findByIdAndUpdate(
            id,
            { $set: updateData }, 
            { new: true, runValidators: true } 
        ).lean();
    
        if (!updateResponse) {
            return null; 
        }
    
        // Optionally return a formatted public profile
        return await this.getUserPublicProfile(id);
    }
    


    async deleteUserById(id: string) {
        const user = await UserModel.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}

import { IUserUpdateData } from "./types";
import { UserRepositoryClass } from "./user.repo";
const User = new UserRepositoryClass()

export class UserServiceClass {
    async getUserById(id: string) {
        return await User.getUserPublicProfile(id)
    }
}
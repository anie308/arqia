import Token from "./token.model"
import { IVerificationCodeEntry } from "./types";

export class VerificationCodeRepoClass {
    private model = Token
    async createNewEntry(newTokenInfo: IVerificationCodeEntry) {
        const entry = new this.model(newTokenInfo)
        const savedEntry = await entry.save()
        return savedEntry;
    }

    async findById(id: string) {
        const entry = await this.model.findOne({ _id: id, deleted: false });
        return entry;
    }


    async findByCode(code: string) {
        const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
        const entryFound = await this.model.findOne({
            code,
            createdAt: { $gte: fifteenMinutesAgo }
        });
        return entryFound;
    }
    

    async findOneAndDelete(code:string){
        await this.model.findOneAndDelete({code})
    }
}
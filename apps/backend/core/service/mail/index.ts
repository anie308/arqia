import { singleMailObjectDTO } from "./dto";
import { nodeMailer } from "./nodemailer";

export class mailController {
    private preferredService = nodeMailer

    private service = new this.preferredService()
    async sendOne(address: string, subject: string, content: string) {
        let singleRecipientObject = { subject, content, reciepients: [address] }
        try {
             singleMailObjectDTO.validate(singleRecipientObject)
            return await this.service.send(singleRecipientObject)
        } catch (error) {
            console.log(error);
        }
    }
}
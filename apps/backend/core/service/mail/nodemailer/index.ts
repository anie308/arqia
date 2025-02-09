import { Configs } from "../../../configs";
import transporterInit from "./transporter"
import { IMailObject } from "../types";
import logger from "../../../utils/logger";


export class nodeMailer {
    async send(mailObject: IMailObject): Promise<any> {
        try {
            const { content, subject, reciepients } = mailObject
            const transporter = await transporterInit()
            const info = await transporter.sendMail({
                from: `"Do-Not-Reply" <${Configs.mail.address}>`,
                to: reciepients,
                subject: subject,
                html: content,
            });
            return { success: true }
        } catch (error: any) {
            logger.error(error.message)
            return { success: false }
        }
    }
}
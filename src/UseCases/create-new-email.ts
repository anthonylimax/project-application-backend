
import { EmailSender, ICreateEmail } from "./interfaces/ICreateEmail";

export class CreateNewEmail implements ICreateEmail{

    constructor(){}
    create(content : any): EmailSender {
        const formatted = {
            email: content.email,
            text: content.text,
            subject: content.about,
        }
        return formatted;
    }

}
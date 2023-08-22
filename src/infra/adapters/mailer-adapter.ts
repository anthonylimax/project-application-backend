import { EmailSender, ICreateEmail } from "../../UseCases/interfaces/ICreateEmail";

export class mailer{
    constructor( private createEmail : ICreateEmail){}
    transport(content : any){
        return this.createEmail.create(content);
    }
}
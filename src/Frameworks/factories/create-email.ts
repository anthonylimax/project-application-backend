import { CreateNewEmail } from "../../UseCases/create-new-email";
import { EmailSender } from "../../UseCases/interfaces/ICreateEmail";
import { mailer } from "../../infra/adapters/mailer-adapter";

export default function createdEmail(email: EmailSender) {
    const create = new CreateNewEmail();
    const infra = new mailer(create);
    return infra.transport(email);
}
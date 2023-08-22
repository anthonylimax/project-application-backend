
export interface ICreateEmail{
    create(content : any) : EmailSender,
}

export interface EmailSender{
    email: string,
    subject: string,
    text: string,
}
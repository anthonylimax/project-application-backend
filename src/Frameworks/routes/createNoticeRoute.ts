import { Router } from "express";
import { adaptRoute } from "../../infra/adapters/express-adapter";
import makeCreateNotice from "../factories/create-notice";
import d from "../db/dbQuery";
import createdEmail from "../factories/create-email";
import { Mailer } from "../nodemailer/nodemailer";
export const postRoute = (router : Router) =>{
    router.post("/createNotice",adaptRoute(makeCreateNotice()))
    
    router.get("/showData", async (req, res)=>{
        d.db.execute("select * from noticia", (err, result, fields)=>{
            
            res.send(result);
        })
    })
    router.put("/atualizeUpvote", async (req, res)=>{
        d.db.query(`update noticia set upvotes = upvotes + ${req.body.number} where uuid = '${req.body.uuid}'`)
    })
    router.post('/emailSender', async (req,res)=>{
        const makeCreateNewEmail = createdEmail(await req.body);
        console.log(makeCreateNewEmail.email)
        Mailer.sendMail({
            html : `
                <pre>MENSAGEM ENVIADA PELO EMAIL: ${makeCreateNewEmail.email}
                ${makeCreateNewEmail.text}
                </pre>
            `,
            subject: makeCreateNewEmail.subject,
            from: "EMAIL ENVIADO DA APLICAÇÃO WEB",
            to: process.env.EMAIL_USERNAME,
        })
    })
}
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();
export const Mailer = nodemailer.createTransport({
    port: 578,
    service: process.env.EMAIL_SERVICE,
    secure: false,
    tls:{
        rejectUnauthorized: false,
    },
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
})
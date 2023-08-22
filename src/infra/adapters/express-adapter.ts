import { Response, Request } from "express";
import { CreateUserController } from "../controllers/create-user-controler"; 
import d from "../../Frameworks/db/dbQuery";


export const adaptRoute = (controller : CreateUserController) =>{
    return async (req: Request, res: Response) =>{ 

        const httpreq = {
            notice : await req.body?.notice,
            url: await req.body?.url,
            header: await req.body?.header,
            upVotes: await req.body?.upVotes,
            data: await req.body?.data,
            noticeKey: await req.body?.noticeKey
        };
        const httpRes = await controller.handle(httpreq);
        d.db.query(`insert into noticia(notice, url, header, upvotes, data, uuid, noticekey) values ('${httpRes.body.notice}', '${httpRes.body.url}','${httpRes.body.header}', ${httpRes.body.upVotes}, ${httpRes.body.data},'${httpRes.body.UUID}', '${httpRes.body.noticeKey}')`, (err, result, fields)=>{
            console.log(err)
            res.send(err)
        })
    }
}

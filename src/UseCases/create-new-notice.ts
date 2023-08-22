import { ICreateNotice } from "./ICreateNotice";
import { Notice } from "../entities/notice";
import { randomUUID } from "crypto";
export class CreateNewNotice implements ICreateNotice{
    
    constructor(){
    }
    create(value: dataCreate){
        return new Notice(randomUUID(),value.url,value.notice, value.header, 0, Date.now() ,value.noticeKey);
    }
}

type dataCreate = {
    url: string,
    data: number,
    notice : string,
    header: string,
    upVotes: number,
    noticeKey: string[]
}


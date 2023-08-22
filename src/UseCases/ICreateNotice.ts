import { Notice } from "../entities/notice"

export interface ICreateNotice{
    create: (value : dataCreate)=>any
}
export interface Ishow{
    toJSON(e : any) : any; 
}
export type dataCreate = {
    data: number,
    url: string,
    notice : string,
    header: string,
    upVotes: number,
    noticeKey: string[]
}
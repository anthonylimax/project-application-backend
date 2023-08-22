import { Ishow } from "./ICreateNotice";


export class ToShow implements Ishow{
    toJSON(value : any): any {
        const formartted = {
            notice : value?.notice,
            header : value?.header,
            upVotes : value?.upvotes,
            noticeKey : value?.noticekey,
            uuid: value?.uuid
        }
        return formartted;
    }
}
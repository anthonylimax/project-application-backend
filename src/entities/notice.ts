export class Notice{
    constructor(
        private UUID : string,
        private url : string,
        private notice : string,
        private header: string,
        private upVotes: number,
        private data : number,
        private noticeKey: string[]
        ){}
        getNotice(){
            return this.notice;
        }
        getHeader(){
            return this.header;
        }
        getUpVotes(){
            return this.upVotes;
        }
        getNoticeKey(){
            return this.noticeKey;
        }
        getID(){
            return this.UUID;
        }
        setUpVotes(value: number){
            this.upVotes = value;
        }
        setHeader(value: string){
            this.header = value;
        }
        setNoticeKey(value: string[]){
            this.noticeKey = value;
        }
        setNotice(value: string){
            this.notice = value;
        }
}
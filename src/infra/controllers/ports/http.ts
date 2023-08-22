export interface HTTPRequest {
    body?: noticeType,
}
export interface HTTPResponse{
    body: any,
}
type noticeType = {
    notice : string,
    header: string,
    upVotes: number,
    url: string,
    noticeKey: string[],
}
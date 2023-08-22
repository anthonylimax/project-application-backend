import { HTTPResponse } from "../ports/http";

export function ok(data : dataCreate) : HTTPResponse{
    return {body: data}
}
export function InvalidRequest() : HTTPResponse{
    return {body: "erro de criação"}
}

export type dataCreate = {
    notice : string,
    header: string,
    upVotes: number,
    noticeKey: string[]
}
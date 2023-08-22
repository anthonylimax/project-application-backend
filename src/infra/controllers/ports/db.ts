import {QueryError, RowDataPacket, FieldPacket } from "mysql2";
export interface Idb{
    setter(response: RowDataPacket) : response[]

}
type response = {
    notice ?: string,
    header ?: string,
    upVotes ?: number,
    noticeKey ?: string[],
    uuid ?: number
}
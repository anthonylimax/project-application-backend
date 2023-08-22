import { Connection, FieldPacket, QueryError, RowDataPacket } from "mysql2";
import { Idb } from "../controllers/ports/db";
export class db {
    queryResult: any;
    constructor(public q: Connection, public controllerDb: Idb, public query : string){
    }
} 
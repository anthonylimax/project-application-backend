import { HTTPRequest, HTTPResponse } from "../controllers/ports/http";
import { dataCreate } from "../../UseCases/ICreateNotice";
export interface ICreateController{
    handle(request: dataCreate): Promise<HTTPResponse>;
}
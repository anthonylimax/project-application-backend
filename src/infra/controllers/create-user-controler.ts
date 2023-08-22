import { ICreateNotice, dataCreate } from "../../UseCases/ICreateNotice";
import { ICreateController } from "../interfaces/ICreateController";
import { InvalidRequest, ok } from "./helper/ok";
import { HTTPResponse } from "./ports/http";
export class CreateUserController implements ICreateController{
    private userController : ICreateNotice;

    constructor(userController : ICreateNotice){
        this.userController = userController;
    }
    async handle(request : dataCreate): Promise<HTTPResponse>{
        try{
        return ok(this.userController.create(request));
        }
        catch{
        return InvalidRequest();
        }
    }
}
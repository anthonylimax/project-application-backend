import { CreateNewNotice } from "../../UseCases/create-new-notice";
import { CreateUserController } from "../../infra/controllers/create-user-controler"
export default function makeCreateNotice() : CreateUserController{
    const createNewNotice = new CreateNewNotice();
    const createUserController = new CreateUserController(createNewNotice);
    return createUserController;
}
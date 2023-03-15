import { Request, Response, Router } from "express";
import { loginUserController } from "../useCases/loginUser";

export const loginRouter = Router();

loginRouter.post('/', (req: Request, res: Response) => { return loginUserController.handle(req, res) })


import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/users/createUser/index";

export const userRouter = Router();

userRouter.post('/', (req: Request, res: Response) => { return createUserController.handle(req, res) })

import { Request, Response, Router } from "express";
import { getAllUsersController } from "../useCases/users/getAllUsers";
import { createUserController } from "../useCases/users/createUser";
import { deleteUserController } from "../useCases/users/deleteUser";
import { getUserByIdController } from "../useCases/users/getUserById";

export const userRouter = Router();

userRouter.post('/', (req: Request, res: Response) => { return createUserController.handle(req, res) })
userRouter.get('/', (req: Request, res: Response) => { return getAllUsersController.handle(req, res) })
userRouter.delete('/:id', (req: Request, res: Response) => { return deleteUserController.handle(req, res) })
userRouter.get('/:id', (req: Request, res: Response) => { return getUserByIdController.handle(req, res) })

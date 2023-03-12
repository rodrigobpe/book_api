import { Router } from "express";
import { bookRouter } from "./bookRoutes";
import { userRouter } from "./userRoutes";

export const routes = Router()

routes.use('/books',bookRouter);
routes.use('/users',userRouter);

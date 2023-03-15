import { Router } from "express";
import { bookRouter } from "./bookRoutes";
import { loginRouter } from "./loginRoutes";
import { userRouter } from "./userRoutes";

export const routes = Router()

routes.use('/login',loginRouter);
routes.use('/books',bookRouter);
routes.use('/users',userRouter);

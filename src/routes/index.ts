import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { bookRouter } from "./bookRoutes";
import { loginRouter } from "./loginRoutes";
import { userRouter } from "./userRoutes";

export const routes = Router()

routes.use('/login',loginRouter);
routes.use('/books',isAuthenticated,bookRouter);
routes.use('/users',isAuthenticated,userRouter);

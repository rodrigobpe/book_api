import { Router } from "express";
import { bookRouter } from "./bookRoutes";

export const routes = Router()

routes.use('/books',bookRouter);

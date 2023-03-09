import 'express-async-errors'
import express from 'express'
import cors from 'cors';
require("dotenv").config();
import morgan from 'morgan';
import { routes } from "./routes";
import errorHandlingMiddleware from './middlewares/error-handling-middleware';


// criando o app 
export const app = express();

//adicionando os middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.use(errorHandlingMiddleware)



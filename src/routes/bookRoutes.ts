import { createBookController } from "../useCases/books/createBook/index";
import { Request, Response, Router } from "express";
import { getAllBooksController } from "../useCases/books/getAllBooks";
import { deleteBookController } from "../useCases/books/deleteBook";
import { getBookByIdController } from '../useCases/books/getBookById'
import { updateBookController } from "../useCases/books/updateBook";


export const bookRouter = Router();

bookRouter.post('/', (req: Request, res: Response) => { return createBookController.handle(req, res) })
bookRouter.get('/', (req: Request, res: Response) => { return getAllBooksController.handle(req, res) })
bookRouter.delete('/:id', (req: Request, res: Response) => { return deleteBookController.handle(req, res) })
bookRouter.get('/:id', (req: Request, res: Response) => { return getBookByIdController.handle(req, res) })
bookRouter.patch('/:id', (req: Request, res: Response) => { return updateBookController.handle(req, res) })
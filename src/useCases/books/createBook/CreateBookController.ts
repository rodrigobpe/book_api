import { Request, Response } from "express";
import { CreateBookDTO } from "./CreateBookDTO";
import CreateBookUseCase from "./CreateBookUseCase";

export default class CreateBookController {
    constructor(private createBookUseCase: CreateBookUseCase){}
    async handle(req: Request, res: Response): Promise<Response> {
        const { author, price, title }: CreateBookDTO = req.body;
        const book = await this.createBookUseCase.execute({ author, price, title })
        return res.status(201).json({
            message: "Book created",
            book
        })
    }
}
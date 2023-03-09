import { Request, Response } from "express";
import DeleteBookUseCase from "./DeleteBookUseCase";

export default class DeleteBookController {
    constructor(private readonly deleteBookUseCase: DeleteBookUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        await this.deleteBookUseCase.execute({ id });
        return res.status(200).json({
            message: "Book deleted"
        })
    }
}
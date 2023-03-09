import AppError from "../../../helpers/AppError";
import { BookRepository } from "../../../repositories/BookRepository";
import { CreateBookDTO } from "./CreateBookDTO";

export default class CreateBookUseCase {
    constructor(private bookRepository: BookRepository) { }
    async execute({ author, price, title }: CreateBookDTO): Promise<void> {
        const bookAlreadyExist = await this.bookRepository.findByTitle(title)

        if (bookAlreadyExist) {
            throw new AppError(400, "Book already exist");
        }

        await this.bookRepository.create({ author, price, title });

    }
}
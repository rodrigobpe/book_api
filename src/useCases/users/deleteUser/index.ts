import UserPrismaRepository from "../../../repositories/implementation/UserPrismaRepository";
import DeleteUserController from "./DeleteUserController";
import DeleteUserUseCase from "./DeleteUserUseCase";

const userPrismaRepository = new UserPrismaRepository()
const deleteUserUseCase = new DeleteUserUseCase(userPrismaRepository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)
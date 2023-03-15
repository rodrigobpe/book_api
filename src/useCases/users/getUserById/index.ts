import UserPrismaRepository from "../../../repositories/implementation/UserPrismaRepository";
import GetUserByIdController from "./GetUserByIdController";
import GetUserByIdUseCase from "./GetUserByIdUseCase";

const userPrismaRepository = new UserPrismaRepository()
const getUserByIdUseCase = new GetUserByIdUseCase(userPrismaRepository)
export const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)
import UserPrismaRepository from "../../../repositories/implementation/UserPrismaRepository";
import GetAllUsersController from "./GetAllUsersController";
import GetAllUsersUseCase from "./GetAllUsersUseCase";

const userPrismaRepository = new UserPrismaRepository()
const getAllUsersUseCase = new GetAllUsersUseCase(userPrismaRepository)
export const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)
import UserPrismaRepository from "../../repositories/implementation/UserPrismaRepository";
import LoginUserController  from "./LoginUserController";
import LoginUserUseCase from "./LoginUserUseCase";

const userRepository = new UserPrismaRepository()
const loginUserUseCase = new LoginUserUseCase(userRepository)
export const loginUserController = new LoginUserController(loginUserUseCase);

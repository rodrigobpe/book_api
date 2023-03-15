import jwt from "jsonwebtoken";
import { Response,Request,NextFunction } from "express";
import AppError from "../helpers/AppError";
import { prisma } from "../database";

type JWToken = {
    id: string
}


export const isAuthenticated = async (req:Request,res:Response,next:NextFunction) =>{
    const {authorization} = req.headers
    if(!authorization){
        throw new AppError(401, "Unauthorized, missing JWT")
    }

    const token = authorization.split(" ")[1]
    const {id} = jwt.verify(token, process.env.JWT_TOKEN ?? '') as JWToken
    const user = await prisma.user.findFirst({
        where:{
            id_user:id
        }
    })
    if(!user){
        throw new AppError(401, "Unauthorized user")
    }
    next()
}
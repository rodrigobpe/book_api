import AppError from "../helpers/AppError"
import { NextFunction, Request, Response } from "express";

export default function errorHandlingMiddleware(
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const status = error.statusCode || 500;
    const message = error.message || 'Internal server Error';

    console.log(error)
    return res.status(status).json({
        status,
        message
    });

    next();
}
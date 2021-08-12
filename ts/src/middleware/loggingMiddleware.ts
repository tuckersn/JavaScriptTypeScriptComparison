import { Request, Response } from "express";
import Logger from "../common/Logger";

export function loggingMiddleware(req: Request, res: Response, next: Function) {
    Logger.info(`Connection from ${req.headers['x-forwarded-for'] || req.socket.remoteAddress } to ${req.originalUrl}`)
    next();
}

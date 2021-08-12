import { Request, Response } from "express";
import { config } from "../config";

export function unsafeApiKeyMiddleWare(req: Request, res: Response, next: Function) {
    let auth = req.headers.authorization || req.headers['Authorization'];
    if(auth) {
        if(auth === config.unsafeApiKey) {
            next();
        } else {
            res.status(401).send("Unauthorized!");
        }
    } else {
        res.status(500).send("Invalid auth!");
    }
}


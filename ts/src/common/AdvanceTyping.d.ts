import { Request, Response } from "express";

export type Color = 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'orange';
export type ExpressCB = (req: Request, res: Response, next?: Function) => any;
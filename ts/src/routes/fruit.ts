import { Request, Response } from "express";
import { fruitDb } from "../model/fruitModel";

/**
 * @param urlParamKey - Param 
 */
export function fruitRoute(urlParamKey: string) {
    // Return callback used as the express route.
    return (req: Request, res: Response) => {
        // If the URL parameter is undefined
        if(req.params[urlParamKey] === undefined)
            return res.status(500).send("Invalid ID");
            
        // If the URL parameter is not numeric
        if(!(/[0-9]+/.test(req.params[urlParamKey]!)))
            return res.status(500).send("Invalid ID");
        
        // Find the fruit, and send it to the user with some additional info
        let fruit = fruitDb[parseInt(req.params[urlParamKey]!)]!;
        return res.status(200).json({
            ...fruit,
            link: fruit.generateGoogleSearch()
        });
    };
}
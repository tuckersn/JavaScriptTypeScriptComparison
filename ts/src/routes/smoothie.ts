import { Request, Response } from "express";
import Logger from "../common/Logger";
import { ExpressCB } from "../common/AdvanceTyping";
import { Fruit } from "../model/fruitModel";


export function makeSmoothieRoute(): ExpressCB {
    return (req: Request, res: Response) => {
        try {
            const fruits: string[] = req.body.fruits;
            if(fruits) {
                /**
                 * Total price of the smoothie.
                 */
                let price = 0;
                /**
                 * Map of name strings.
                 */
                let names: {[name: string]: true} = {};

                for(let fruitName of fruits) {
                     // If fruit is actually apart of the fruit dataset.
                    if(fruitName in Fruit.map) {
                        price += Fruit.map[fruitName]!.price;
                        // If this is the first one of this fruit in the list.
                        if(!(fruitName in names))
                            names[fruitName] = true;
                    } else {
                        return res.status(500).send(`Invalid fruitName '${fruitName}'!`)
                    }
                }

                // Join each unique name one space apart.
                const name = Object.keys(names).join(" ") + " smoothie";
                return res.status(200).json({
                    // If there's no fruit, default to an air smoothie.
                    name: name === " smoothie" ? "air smoothie" : name,
                    price
                });
            } else {
                Logger.error("Smoothie route recieved invalid body!");
            }
        } catch(e) {
            Logger.error(e.stack);
        }
        return res.status(500).send("Internal Server Error!");
    }
}
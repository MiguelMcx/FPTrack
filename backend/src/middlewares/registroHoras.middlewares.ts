import * as z from "zod";
import { Request, Response, NextFunction } from 'express'

export const validateregistroHoras = (schema: z.ZodObject<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(422).json({ error: result.error.issues });
        }
        next();
    }   
}
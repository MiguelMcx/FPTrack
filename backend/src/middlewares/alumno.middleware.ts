import * as z from "zod";
import { Request, Response, NextFunction } from "express";

export const validateAlumno = (schema: z.ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const resultado = schema.safeParse(req.body);
    if (!resultado.success) {
      return res.status(422).json({ error: resultado.error.issues });
    }
    next();
  };
};

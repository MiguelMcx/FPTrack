import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


 export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token no proporcionado" });
    }else {
        jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({ error: "Token inválido" });
            }
            next();
        });
    }
};

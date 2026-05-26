import {prisma} from "../lib/prisma";
import {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req: Request, res: Response) => {
  const {nombre, email, password, rol} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
        const nuevoUsuario = await prisma.usuario.create({
            data: {
                nombre,
                email,
                password: hashedPassword,
                rol
            },
        });
        const { password: _, ...usuarioSinPassword } = nuevoUsuario
        res.status(201).json(usuarioSinPassword)

       
};

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
   
        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        const isMatch = await bcrypt.compare(password, usuario.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ error: "JWT secret no configurado" });
        }
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, rol: usuario.rol },
            jwtSecret,
            { expiresIn: "1h" }
        );
        res.json({ token });
    
   
};
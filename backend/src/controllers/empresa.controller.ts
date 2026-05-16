import { prisma } from "../lib/prisma";
import { Request, Response } from "express";


export const getEmpresas = async (req: Request, res: Response) => {
  const empresas = await prisma.empresa.findMany();
  res.json(empresas);
}
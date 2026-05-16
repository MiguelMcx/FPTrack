import { prisma } from "../lib/prisma";
import { Request, Response } from "express";


export const getEmpresas = async (req: Request, res: Response) => {
  const empresas = await prisma.empresa.findMany();
  res.json(empresas);
}

export const getById = async (req: Request, res: Response) => {
  const empresa = await prisma.empresa.findUnique({
    where: {
      id: parseInt(req.params.id as string)
    }
  });
  if (!empresa) {
    return res.status(404).json({ error: 'Empresa no encontrada' });
  }
  
  
  res.json(empresa);
}
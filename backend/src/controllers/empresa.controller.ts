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

export const postEmpresa = async (req: Request, res: Response) => { 
  const nuevaEmpresa = await prisma.empresa.create({
    data:req.body
  });
  res.status(201).json(nuevaEmpresa); 
}

export const deleteEmpresa = async (req: Request, res: Response) => {
  const empresa = await prisma.empresa.delete({
    where: {
      id: parseInt(req.params.id as string)}
    })
    //res.status(204).send(); enviado correctamente pero sin mensaje 
    res.json({
      message: 'Empresa eliminada correctamente'
    })
  }

  export const updateEmpresa = async (req: Request, res: Response) => {
    const empresa = await prisma.empresa.update({
      where: { id: parseInt(req.params.id as string) },
      data: req.body
    });
    res.json(empresa);
  }
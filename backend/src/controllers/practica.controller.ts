import {prisma} from '../lib/prisma';
import {Request, Response} from 'express';


export const getPracticas = async (req: Request, res: Response) => {
  const practicas = await prisma.practica.findMany({
    include: {
      alumno:{select :{nombre: true}} ,
      empresa: {select :{nombre: true}}
    }
});
  res.json(practicas);
};

export const getPracticaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const practica = await prisma.practica.findUnique({
    where: { 
        id: parseInt(req.params.id as string) },
    include: {
      alumno: true,
      empresa: true,
    }
  });
  if (!practica) {
    return res.status(404).json({ error: 'Práctica no encontrada' });
  }
  res.json(practica);
};

export const postPractica = async (req: Request, res: Response) => {
const nuevapractica = await prisma.practica.create({
    data:req.body
  });
  res.status(201).json(nuevapractica); 
}

export const deletePractica = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.practica.delete({
      where: {       
        id: parseInt(req.params.id as string)}
    });
    res.json({ message: 'Práctica eliminada correctamente' });
  }

  export const updatePractica = async (req: Request, res: Response) => {
    const { id } = req.params;
    const practica = await prisma.practica.update({
        where: { id: parseInt(req.params.id as string) },
        data: req.body
    });
    res.json(practica);
  }
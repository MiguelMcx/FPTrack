import { prisma } from "../lib/prisma";
import { Request, Response } from "express";

export const getAlumnos = async (req: Request, res: Response) => {
  const alumnos = await prisma.alumno.findMany();
  res.json(alumnos);
};

export const getAlumnoById = async (req: Request, res: Response) => {
  const alumno = await prisma.alumno.findUnique({
    where: {
      id: parseInt(req.params.id as string),
    },
  });
  if (!alumno) {
    return res.status(404).json({ error: "Alumno no encontrado" });
  }
  res.json(alumno);
};

export const postAlumno = async (req: Request, res: Response) => {
  const nuevoAlumno = await prisma.alumno.create({
    data: req.body,
  });
  res.status(201).json(nuevoAlumno);
};

export const deleteAlumno = async (req: Request, res: Response) => {
  const alumno = await prisma.alumno.delete({
    where: {
      id: parseInt(req.params.id as string),
    },
  });
  res.json({ message: "Alumno eliminado correctamente" });
};

export const updateAlumno = async (req: Request, res: Response) => {
  const alumno = await prisma.alumno.update({
    where: {
      id: parseInt(req.params.id as string),
    },
    data: req.body,
  });
  res.json(alumno);
};

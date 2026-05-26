import { prisma } from '../lib/prisma'
import { Request, Response } from 'express'

export const getRegistros = async (req: Request, res: Response) => {
  const registros = await prisma.registroHoras.findMany({
    include: {
      practica: { select: { titulo: true } }
    }
  })
  res.json(registros)
}

export const getRegistroById = async (req: Request, res: Response) => {
  const registro = await prisma.registroHoras.findUnique({
    where: { id: parseInt(req.params.id as string) },
    include: { practica: true }
  })
  if (!registro) {
    return res.status(404).json({ error: 'Registro no encontrado' })
  }
  res.json(registro)
}

export const postRegistro = async (req: Request, res: Response) => {
  const registro = await prisma.registroHoras.create({
    data: req.body
  })
  res.status(201).json(registro)
}

export const updateRegistro = async (req: Request, res: Response) => {
  const registro = await prisma.registroHoras.update({
    where: { id: parseInt(req.params.id as string) },
    data: req.body
  })
  res.json(registro)
}

export const deleteRegistro = async (req: Request, res: Response) => {
  await prisma.registroHoras.delete({
    where: { id: parseInt(req.params.id as string) }
  })
  res.json({ message: 'Registro eliminado correctamente' })
}
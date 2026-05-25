import {prisma} from '../lib/prisma';
import {Request, Response} from 'express';

export const getRegistroHoras = async (req : Request , res : Response) => {
    const registroHoras = await prisma.registroHoras.findMany({
        include: {
            practica: {select :{id: true}},
            alumno: {select :{nombre: true}},
            empresa: {select :{nombre: true}}
        }
    });
    res.json(registroHoras);
}

export const getRegistroHorasById = async (req : Request , res : Response) => {
    const { id } = req.params;
    const registroHoras = await prisma.registroHoras.findUnique({
        where: { id: parseInt(req.params.id as string) },
        include: {
            practica: true,
            alumno: true,
            empresa: true
            
        }
    });
    res.json(registroHoras);
}

export const postRegistroHoras = async (req : Request , res : Response) => {
    const nuevoRegistroHoras = await prisma.registroHoras.create({
        data: req.body
    });
    res.status(201).json(nuevoRegistroHoras);
}


export const deleteRegistroHoras = async (req : Request , res : Response) => {
    const { id } = req.params;
    await prisma.registroHoras.delete({ 
        where: { id: parseInt(req.params.id as string) }
    });
    res.status(204).send();
}

export const updateRegistroHoras = async (req : Request , res : Response) => {
    const { id } = req.params;
    const registroHoras = await prisma.registroHoras.update({
        where: { id: parseInt(req.params.id as string) },
        data: req.body
    });
    res.json(registroHoras);
}

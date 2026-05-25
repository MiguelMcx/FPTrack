import * as z from 'zod';

export const RegistroHorasSchema = z.object({
    fecha: z.coerce.date(),
    horas: z.number().positive(),
    descripcion: z.string().optional(),
    practicaId: z.number().int(),
});
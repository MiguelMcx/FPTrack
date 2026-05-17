import * as z from "zod";

export const PracticaSchema = z.object({
    titulo: z.string().min(2),
    fechaInicio: z.coerce.date(),
    alumnoId : z.number().int(),
    empresaId : z.number().int(),
    descripcion: z.string().optional(),
    fechaFin: z.coerce.date().optional(),
    estado: z.string().optional(),
});
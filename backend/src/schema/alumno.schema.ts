import * as z from "zod";
export const AlumnoSchema = z.object({
    nombre: z.string().min(2, "El nombre es obligatorio"),
    email: z.email(),
    telefono: z.string().optional(),
});
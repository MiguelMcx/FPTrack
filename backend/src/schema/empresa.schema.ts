import * as z from "zod";

export const EmpresaSchema = z.object({
    nombre: z.string().min(2, "El nombre es obligatorio"),
    direccion: z.string().optional(),
    telefono: z.string().optional(),
    email: z.email().optional(),
});


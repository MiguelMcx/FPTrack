import { Router } from "express";
import { getPracticas } from "../controllers/practica.controller";
import { postPractica } from "../controllers/practica.controller";
import { getPracticaById } from "../controllers/practica.controller";
import { deletePractica } from "../controllers/practica.controller";
import { updatePractica } from "../controllers/practica.controller";
import { validatePractica } from "../middlewares/practica.middlewares";
import { PracticaSchema } from "../schema/practica.schema";
import { authMiddleware } from "../middlewares/auth.midllewares";

const practicaRouter = Router();

practicaRouter.get('/',getPracticas, authMiddleware)
practicaRouter.get('/:id',authMiddleware, getPracticaById)
practicaRouter.post('/', authMiddleware, validatePractica(PracticaSchema), postPractica)
practicaRouter.delete('/:id', authMiddleware, deletePractica)
practicaRouter.put('/:id', authMiddleware, validatePractica(PracticaSchema), updatePractica)

export default practicaRouter;

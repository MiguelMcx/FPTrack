import { Router } from "express";
import { getPracticas } from "../controllers/practica.controller";
import { postPractica } from "../controllers/practica.controller";
import { getPracticaById } from "../controllers/practica.controller";
import { deletePractica } from "../controllers/practica.controller";
import { updatePractica } from "../controllers/practica.controller";
import { validatePractica } from "../middlewares/practica.middlewares";
import { PracticaSchema } from "../schema/practica.schema";

const practicaRouter = Router();

practicaRouter.get('/',getPracticas)
practicaRouter.get('/:id',getPracticaById)
practicaRouter.post('/', validatePractica(PracticaSchema), postPractica)
practicaRouter.delete('/:id', deletePractica)
practicaRouter.put('/:id', validatePractica(PracticaSchema), updatePractica)

export default practicaRouter;

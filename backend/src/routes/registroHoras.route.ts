import { Router } from "express";
import { getRegistroHoras, getRegistroHorasById, postRegistroHoras, deleteRegistroHoras, updateRegistroHoras } from "../controllers/registroHoras.controller";
import { validateRegistroHoras } from "../middlewares/registroHoras.middleware";
import { RegistroHorasSchema } from "../schema/registroHoras.schema";

const registroHorasRouter = Router();

registroHorasRouter.get('/', getRegistroHoras);
registroHorasRouter.get('/:id', getRegistroHorasById);
registroHorasRouter.post('/', validateRegistroHoras(RegistroHorasSchema), postRegistroHoras);
registroHorasRouter.delete('/:id', deleteRegistroHoras);
registroHorasRouter.put('/:id', validateRegistroHoras(RegistroHorasSchema), updateRegistroHoras);

export default registroHorasRouter;
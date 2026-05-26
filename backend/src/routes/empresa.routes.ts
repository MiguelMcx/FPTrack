import { Router } from "express";
import { getEmpresas } from "../controllers/empresa.controller";
import { postEmpresa } from "../controllers/empresa.controller";
import { getById } from "../controllers/empresa.controller";
import { deleteEmpresa } from "../controllers/empresa.controller";
import { updateEmpresa } from "../controllers/empresa.controller";
import { validateEmpresa } from "../middlewares/empresa.middlewares";
import { EmpresaSchema } from "../schema/empresa.schema";

const router = Router();

router.get('/',getEmpresas)
router.get('/:id',getById)
router.post('/', validateEmpresa(EmpresaSchema), postEmpresa)
router.delete('/:id', deleteEmpresa)
router.put('/:id', validateEmpresa(EmpresaSchema), updateEmpresa)

export default router;
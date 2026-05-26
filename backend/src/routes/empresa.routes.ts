import { Router } from "express";
import { getEmpresas } from "../controllers/empresa.controller";
import { postEmpresa } from "../controllers/empresa.controller";
import { getById } from "../controllers/empresa.controller";
import { deleteEmpresa } from "../controllers/empresa.controller";
import { updateEmpresa } from "../controllers/empresa.controller";
import { validateEmpresa } from "../middlewares/empresa.middlewares";
import { EmpresaSchema } from "../schema/empresa.schema";
import { authMiddleware } from "../middlewares/auth.midllewares";

const router = Router();

router.get('/',authMiddleware, getEmpresas)
router.get('/:id',authMiddleware, getById)
router.post('/', authMiddleware, validateEmpresa(EmpresaSchema), postEmpresa)
router.delete('/:id', authMiddleware, deleteEmpresa)
router.put('/:id', authMiddleware, validateEmpresa(EmpresaSchema), updateEmpresa)

export default router;
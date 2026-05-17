import { Router } from "express";
import { getEmpresas } from "../controllers/empresa.controller";
import { postEmpresa } from "../controllers/empresa.controller";
import { getById } from "../controllers/empresa.controller";
import { deleteEmpresa } from "../controllers/empresa.controller";
import { updateEmpresa } from "../controllers/empresa.controller";

const router = Router();

router.get('/',getEmpresas)
router.get('/:id',getById)
router.post('/', postEmpresa)
router.delete('/:id', deleteEmpresa)
router.put('/:id', updateEmpresa)

export default router;
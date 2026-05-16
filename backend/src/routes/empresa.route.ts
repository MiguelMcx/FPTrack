import { Router } from "express";
import { getEmpresas } from "../controllers/empresa.controller";
import { getById } from "../controllers/empresa.controller";

const router = Router();

router.get('/',getEmpresas)
router.get('/:id',getById)


export default router;
import { Router } from "express";
import { getEmpresas } from "../controllers/empresa.controller";

const router = Router();

router.get('/',getEmpresas)

export default router;
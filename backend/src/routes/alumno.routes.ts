import { Router } from "express";
import { getAlumnos } from "../controllers/alumno.controller";
import { postAlumno } from "../controllers/alumno.controller";
import { getAlumnoById } from "../controllers/alumno.controller";
import { deleteAlumno } from "../controllers/alumno.controller";
import { updateAlumno } from "../controllers/alumno.controller";
import { validateAlumno } from "../middlewares/alumno.middlewares";
import { AlumnoSchema } from "../schema/alumno.schema";
import { authMiddleware } from "../middlewares/auth.midllewares";

const router = Router();

router.get('/',authMiddleware, getAlumnos)
router.get('/:id',authMiddleware, getAlumnoById)
router.post('/', authMiddleware, validateAlumno(AlumnoSchema), postAlumno)
router.delete('/:id', authMiddleware, deleteAlumno)
router.put('/:id', authMiddleware, validateAlumno(AlumnoSchema), updateAlumno)

export default router;
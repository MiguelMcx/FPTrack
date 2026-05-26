import { Router } from "express";
import { getAlumnos } from "../controllers/alumno.controller";
import { postAlumno } from "../controllers/alumno.controller";
import { getAlumnoById } from "../controllers/alumno.controller";
import { deleteAlumno } from "../controllers/alumno.controller";
import { updateAlumno } from "../controllers/alumno.controller";
import { validateAlumno } from "../middlewares/alumno.middlewares";
import { AlumnoSchema } from "../schema/alumno.schema";

const router = Router();

router.get('/',getAlumnos)
router.get('/:id',getAlumnoById)
router.post('/', validateAlumno(AlumnoSchema), postAlumno)
router.delete('/:id', deleteAlumno)
router.put('/:id', validateAlumno(AlumnoSchema), updateAlumno)

export default router;
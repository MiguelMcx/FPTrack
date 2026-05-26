import { Router } from 'express'
import { getRegistros, getRegistroById, postRegistro, updateRegistro, deleteRegistro } from '../controllers/registroHoras.controller'
import { validateEmpresa } from '../middlewares/empresa.middlewares'
import { RegistroHorasSchema } from '../schema/registroHoras.schema'
import { authMiddleware } from '../middlewares/auth.midllewares'

const router = Router()

router.get('/', authMiddleware, getRegistros)
router.get('/:id', authMiddleware, getRegistroById)
router.post('/', authMiddleware, validateEmpresa(RegistroHorasSchema), postRegistro)
router.put('/:id', authMiddleware, validateEmpresa(RegistroHorasSchema), updateRegistro)
router.delete('/:id', authMiddleware, deleteRegistro)

export default router
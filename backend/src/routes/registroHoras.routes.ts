import { Router } from 'express'
import { getRegistros, getRegistroById, postRegistro, updateRegistro, deleteRegistro } from '../controllers/registroHoras.controller'
import { validateEmpresa } from '../middlewares/empresa.middlewares'
import { RegistroHorasSchema } from '../schema/registroHoras.schema'

const router = Router()

router.get('/', getRegistros)
router.get('/:id', getRegistroById)
router.post('/', validateEmpresa(RegistroHorasSchema), postRegistro)
router.put('/:id', validateEmpresa(RegistroHorasSchema), updateRegistro)
router.delete('/:id', deleteRegistro)

export default router
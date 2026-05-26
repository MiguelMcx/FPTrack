import 'dotenv/config'
import express from 'express'

import empresaRoutes from './routes/empresa.routes'

import alumnoRoutes from './routes/alumno.routes'

import practicaRouter from './routes/practica.routes'

import registroHorasRouter from './routes/registroHoras.routes'

import authRouter from './routes/auth.routes'

const app = express()
const PORT = Number(process.env.PORT) || 3000

app.use(express.json())


app.use('/api/empresas', empresaRoutes)

app.use('/api/alumnos', alumnoRoutes)

app.use('/api/practicas', practicaRouter)

app.use('/api/registros', registroHorasRouter)

app.use('/api/auth', authRouter)



app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ error: err.message })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
import express from 'express'

import empresaRoutes from './routes/empresa.route'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())


app.use('/api/empresas', empresaRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ error: err.message })
})
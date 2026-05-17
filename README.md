# FPTrack

Aplicación web para la gestión y seguimiento de prácticas FP/DAM. Permite gestionar empresas, alumnos, prácticas, registro de horas, incidencias y generar informes de progreso.

## Stack tecnológico

**Backend**
- Node.js v24
- Express 5
- TypeScript 6
- Prisma 7
- Supabase (PostgreSQL)

**Frontend** *(próximamente)*
- React
- TypeScript
- TailwindCSS

## Requisitos previos

- Node.js v18 o superior
- npm
- Una cuenta en [Supabase](https://supabase.com) con un proyecto creado

## Instalación

```bash
# Clona el repositorio
git clone https://github.com/MiguelMcx/FPTrack.git
cd FPTrack/backend

# Instala las dependencias
npm install
```

## Configuración

Crea un archivo `.env` dentro de la carpeta `backend/` con el siguiente contenido:

```env
DATABASE_URL="postgresql://postgres:[TU-PASSWORD]@db.[TU-ID].supabase.co:5432/postgres"
PORT=3000
```

Sustituye los valores con los de tu proyecto de Supabase. Los encuentras en **Settings → Database → Connection string → Session mode**.

## Base de datos

```bash
# Genera el cliente de Prisma
npx prisma generate

# Ejecuta las migraciones
npx prisma migrate dev
```

## Ejecutar en desarrollo

```bash
npm run dev
```

El servidor arrancará en `http://localhost:3000`

## Endpoints disponibles

### Empresas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/empresas` | Lista todas las empresas |
| GET | `/api/empresas/:id` | Obtiene una empresa por ID |
| POST | `/api/empresas` | Crea una empresa nueva |
| PUT | `/api/empresas/:id` | Actualiza una empresa |
| DELETE | `/api/empresas/:id` | Elimina una empresa |

### Alumnos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/alumnos` | Lista todos los alumnos |
| GET | `/api/alumnos/:id` | Obtiene un alumno por ID |
| POST | `/api/alumnos` | Crea un alumno nuevo |
| PUT | `/api/alumnos/:id` | Actualiza un alumno |
| DELETE | `/api/alumnos/:id` | Elimina un alumno |

## Estructura del proyecto

```
backend/
├── src/
│   ├── controllers/       # Lógica de cada recurso
│   ├── routes/            # Definición de rutas
│   ├── middlewares/       # Validaciones y manejo de errores
│   ├── schemas/           # Schemas de validación con Zod
│   ├── lib/
│   │   └── prisma.ts      # Cliente de Prisma (singleton)
│   └── index.ts           # Punto de entrada
├── prisma/
│   └── schema.prisma      # Modelos de base de datos
├── .env                   # Variables de entorno (no incluido)
├── .gitignore
├── package.json
└── tsconfig.json
```

## Autor

Miguel — [GitHub](https://github.com/MiguelMcx)
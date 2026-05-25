-- CreateTable
CREATE TABLE "RegistroHoras" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "horas" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "practicaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistroHoras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RegistroHoras" ADD CONSTRAINT "RegistroHoras_practicaId_fkey" FOREIGN KEY ("practicaId") REFERENCES "Practica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

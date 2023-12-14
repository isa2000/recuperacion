-- CreateTable
CREATE TABLE "Bus" (
    "ID_CLIENTE" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "destiny" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "reason" TEXT NOT NULL,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("ID_CLIENTE")
);

-- CreateTable
CREATE TABLE "Bus" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "destiny" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "reason" TEXT,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);

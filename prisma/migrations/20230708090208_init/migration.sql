-- CreateTable
CREATE TABLE "TopFan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TopFan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Custom" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "kda" TEXT NOT NULL,

    CONSTRAINT "Custom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TopFan_name_key" ON "TopFan"("name");

import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const GET = async () => {

    const prisma = new PrismaClient();

    const user = await prisma.topFan.findMany();

    if (!user) {
        return notFound()
    }

    return NextResponse.json({
        "topfan": user
    })
}
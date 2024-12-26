import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { editalId, nome, email, telefone } = body

    const inscricao = await prisma.inscricao.create({
      data: {
        editalId: parseInt(editalId),
        nome,
        email,
        telefone,
      },
    })

    return NextResponse.json(inscricao, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar inscrição:', error)
    return NextResponse.json({ error: 'Erro ao processar a inscrição' }, { status: 500 })
  }
}


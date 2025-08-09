import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    
    const skip = (page - 1) * limit

    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { studentId: { contains: search, mode: 'insensitive' as const } },
            { parentName: { contains: search, mode: 'insensitive' as const } }
          ]
        }
      : {}

    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          attendances: {
            take: 1,
            orderBy: { date: 'desc' }
          },
          assessments: {
            take: 1,
            orderBy: { assessedDate: 'desc' }
          },
          payments: {
            where: { status: 'PENDING' },
            take: 1,
            orderBy: { dueDate: 'asc' }
          }
        }
      }),
      prisma.student.count({ where })
    ])

    return NextResponse.json({
      students,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get students error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const student = await prisma.student.create({
      data: {
        studentId: data.studentId,
        name: data.name,
        birthDate: new Date(data.birthDate),
        address: data.address,
        phone: data.phone,
        parentName: data.parentName,
        parentPhone: data.parentPhone,
        parentEmail: data.parentEmail,
        classLevel: data.classLevel,
        targetHafalan: data.targetHafalan || 30
      }
    })

    return NextResponse.json({
      message: 'Santri berhasil ditambahkan',
      student
    }, { status: 201 })

  } catch (error) {
    console.error('Create student error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

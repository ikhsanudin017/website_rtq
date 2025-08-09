import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// GET - List all staff
export async function GET() {
  try {
    const staff = await prisma.staff.findMany({
      orderBy: [
        { isActive: 'desc' },
        { name: 'asc' }
      ]
    })

    // Format data for compatibility with frontend
    const formattedStaff = staff.map(s => ({
      id: s.id,
      name: s.name,
      position: s.position,
      phone: s.phone,
      email: s.email,
      isActive: s.isActive,
      joinDate: s.joinDate.toISOString()
    }))

    return NextResponse.json(formattedStaff)
  } catch (error) {
    console.error('Staff API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch staff data' },
      { status: 500 }
    )
  }
}

// POST - Create new staff
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, position, phone, email, isActive } = body

    // Validate required fields
    if (!name || !position) {
      return NextResponse.json(
        { error: 'Name and position are required' },
        { status: 400 }
      )
    }

    // Check if email already exists (if provided)
    if (email) {
      const existingStaff = await prisma.staff.findUnique({
        where: { email }
      })

      if (existingStaff) {
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 400 }
        )
      }
    }

    const staff = await prisma.staff.create({
      data: {
        name,
        position,
        phone: phone || null,
        email: email || null,
        isActive: isActive ?? true
      }
    })

    return NextResponse.json(staff, { status: 201 })
  } catch (error) {
    console.error('Create Staff Error:', error)
    return NextResponse.json(
      { error: 'Failed to create staff' },
      { status: 500 }
    )
  }
}

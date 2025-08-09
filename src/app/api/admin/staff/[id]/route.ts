import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// PUT - Update staff
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { name, position, phone, email, isActive } = body

    const staff = await prisma.staff.update({
      where: { id: params.id },
      data: {
        name,
        position,
        phone: phone || null,
        email: email || null,
        isActive: isActive ?? true
      }
    })

    return NextResponse.json(staff)
  } catch (error) {
    console.error('Update Staff Error:', error)
    return NextResponse.json(
      { error: 'Failed to update staff' },
      { status: 500 }
    )
  }
}

// DELETE - Delete staff
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.staff.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete Staff Error:', error)
    return NextResponse.json(
      { error: 'Failed to delete staff' },
      { status: 500 }
    )
  }
}

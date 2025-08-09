import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Get total students
    const totalStudents = await prisma.student.count({
      where: { isActive: true }
    })

    // Get total staff
    const totalStaff = await prisma.staff.count({
      where: { isActive: true }
    })

    // Get pending payments
    const totalPaymentsPending = await prisma.payment.count({
      where: { status: 'PENDING' }
    })

    // Get today's attendance (present)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const presentToday = await prisma.attendance.count({
      where: {
        date: {
          gte: today,
          lt: tomorrow
        },
        status: 'PRESENT'
      }
    })

    return NextResponse.json({
      totalStudents,
      totalStaff,
      totalPaymentsPending,
      presentToday
    })
  } catch (error) {
    console.error('Dashboard API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
}

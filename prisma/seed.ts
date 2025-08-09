import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/lib/auth'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create super admin user
  const adminPassword = await hashPassword('admin123')
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: adminPassword,
      email: 'admin@rtq.com',
      role: 'ADMIN'
    }
  })

  // Create parent users with students - ONLY new data from user
  const parentPassword = await hashPassword('password123')
  
  const students = [
    {
      studentId: '25010001',
      name: 'Fatan',
      birthDate: new Date('2012-01-15'),
      address: 'Jl. Prambanan No. 1, Sleman',
      phone: '081234567804',
      parentName: 'Bapak Fatoni',
      parentPhone: '081234567804',
      parentEmail: 'fatoni@email.com',
      classLevel: 'Al-Baqarah',
      targetHafalan: 30
    },
    {
      studentId: '25010002',
      name: 'Abel',
      birthDate: new Date('2012-02-20'),
      address: 'Jl. Prambanan No. 2, Sleman',
      phone: '081234567805',
      parentName: 'Bapak Abdullah',
      parentPhone: '081234567805',
      parentEmail: 'abdullah@email.com',
      classLevel: 'Al-Baqarah',
      targetHafalan: 30
    },
    {
      studentId: '25010003',
      name: 'Faqih',
      birthDate: new Date('2012-03-10'),
      address: 'Jl. Prambanan No. 3, Sleman',
      phone: '081234567806',
      parentName: 'Bapak Faqihudin',
      parentPhone: '081234567806',
      parentEmail: 'faqihudin@email.com',
      classLevel: 'Al-Baqarah',
      targetHafalan: 30
    },
    {
      studentId: '25020004',
      name: 'Hayyu',
      birthDate: new Date('2012-04-25'),
      address: 'Jl. Prambanan No. 4, Sleman',
      phone: '081234567807',
      parentName: 'Ibu Hayyuni',
      parentPhone: '081234567807',
      parentEmail: 'hayyuni@email.com',
      classLevel: 'Ali Imran',
      targetHafalan: 30
    },
    {
      studentId: '25020005',
      name: 'Miracle',
      birthDate: new Date('2012-05-30'),
      address: 'Jl. Prambanan No. 5, Sleman',
      phone: '081234567808',
      parentName: 'Bapak Miraj',
      parentPhone: '081234567808',
      parentEmail: 'miraj@email.com',
      classLevel: 'Ali Imran',
      targetHafalan: 30
    },
    {
      studentId: '25040006',
      name: 'Bilqis',
      birthDate: new Date('2012-06-18'),
      address: 'Jl. Prambanan No. 6, Sleman',
      phone: '081234567809',
      parentName: 'Ibu Bilqisma',
      parentPhone: '081234567809',
      parentEmail: 'bilqisma@email.com',
      classLevel: 'An-Nisa',
      targetHafalan: 30
    },
    {
      studentId: '25050007',
      name: 'Dika',
      birthDate: new Date('2012-07-12'),
      address: 'Jl. Prambanan No. 7, Sleman',
      phone: '081234567810',
      parentName: 'Bapak Dikananda',
      parentPhone: '081234567810',
      parentEmail: 'dikananda@email.com',
      classLevel: 'Al-Maidah',
      targetHafalan: 30
    },
    {
      studentId: '25050008',
      name: 'Rayyan',
      birthDate: new Date('2012-08-08'),
      address: 'Jl. Prambanan No. 8, Sleman',
      phone: '081234567811',
      parentName: 'Bapak Rayyandi',
      parentPhone: '081234567811',
      parentEmail: 'rayyandi@email.com',
      classLevel: 'Al-Maidah',
      targetHafalan: 30
    },
    {
      studentId: '25070009',
      name: 'Arin',
      birthDate: new Date('2012-09-22'),
      address: 'Jl. Prambanan No. 9, Sleman',
      phone: '081234567812',
      parentName: 'Ibu Arina',
      parentPhone: '081234567812',
      parentEmail: 'arina@email.com',
      classLevel: 'Al-An\'am',
      targetHafalan: 30
    },
    {
      studentId: '25070010',
      name: 'Atha',
      birthDate: new Date('2012-10-05'),
      address: 'Jl. Prambanan No. 10, Sleman',
      phone: '081234567813',
      parentName: 'Bapak Athallah',
      parentPhone: '081234567813',
      parentEmail: 'athallah@email.com',
      classLevel: 'Al-An\'am',
      targetHafalan: 30
    }
  ]

  for (const studentData of students) {
    // Create parent user
    const parentUser = await prisma.user.upsert({
      where: { username: studentData.studentId },
      update: {},
      create: {
        username: studentData.studentId,
        password: parentPassword,
        email: studentData.parentEmail,
        role: 'PARENT'
      }
    })

    // Create student
    const student = await prisma.student.upsert({
      where: { studentId: studentData.studentId },
      update: {},
      create: {
        ...studentData,
        parentUserId: parentUser.id
      }
    })

    // Create some attendance records
    const today = new Date()
    for (let i = 0; i < 20; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      
      if (date.getDay() !== 0) { // Skip Sundays
        await prisma.attendance.create({
          data: {
            studentId: student.id,
            date: date,
            status: Math.random() > 0.1 ? 'PRESENT' : 'ABSENT',
            recordedBy: admin.id,
            notes: Math.random() > 0.8 ? 'Terlambat 15 menit' : null
          }
        })
      }
    }

    // Create some assessments
    for (let juz = 1; juz <= Math.floor(Math.random() * 15) + 1; juz++) {
      await prisma.assessment.create({
        data: {
          studentId: student.id,
          type: 'HAFALAN_BARU',
          juz: juz,
          score: Math.floor(Math.random() * 30) + 70,
          assessedBy: admin.id,
          notes: `Hafalan Juz ${juz} - ${juz <= 5 ? 'Perlu perbaikan tajwid' : 'Sangat baik'}`
        }
      })
    }

    // Create payment records
    const currentMonth = new Date()
    for (let i = 0; i < 3; i++) {
      const dueDate = new Date(currentMonth)
      dueDate.setMonth(dueDate.getMonth() - i)
      
      await prisma.payment.create({
        data: {
          studentId: student.id,
          type: 'SPP',
          amount: 300000,
          description: `SPP ${dueDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}`,
          dueDate: dueDate,
          status: i === 0 ? 'PENDING' : 'PAID',
          paidDate: i === 0 ? null : dueDate
        }
      })
    }
  }

  // Create staff/pengurus data
  const staffData = [
    {
      name: 'Nofhendri',
      position: 'KETUA' as const,
      phone: '081234567890',
      email: 'nofhendri@rumah-tahfizh.com'
    },
    {
      name: 'Ikhsanudin',
      position: 'SEKRETARIS' as const,
      phone: '081234567891',
      email: 'ikhsanudin@rumah-tahfizh.com'
    },
    {
      name: 'Zulfaa Khoiriyyah Nuurul Ariibah',
      position: 'BENDAHARA' as const,
      phone: '081234567892',
      email: 'zulfa@rumah-tahfizh.com'
    },
    {
      name: 'Yuliyanto Prayitno',
      position: 'MUSYRIF' as const,
      phone: '081234567893',
      email: 'yuliyanto@rumah-tahfizh.com'
    }
  ]

  for (const staff of staffData) {
    await prisma.staff.upsert({
      where: { email: staff.email },
      update: {},
      create: staff
    })
  }

  // Create daily quotes
  const quotes = [
    {
      content: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
      source: 'Al-Quran',
      reference: 'At-Talaq: 2',
      dateFor: new Date()
    },
    {
      content: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      source: 'Al-Quran',  
      reference: 'Ash-Sharh: 6',
      dateFor: new Date(Date.now() + 24 * 60 * 60 * 1000)
    }
  ]

  for (const quote of quotes) {
    await prisma.dailyQuote.create({
      data: quote
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

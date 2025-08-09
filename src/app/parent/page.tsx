'use client'

import { useState } from 'react'
import ParentLayout from '@/components/layouts/ParentLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpenIcon, 
  CalendarDaysIcon, 
  CurrencyDollarIcon,
  TrophyIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function ParentDashboard() {
  const [selectedChild, setSelectedChild] = useState('ahmad')

  // Mock data - nanti akan diambil dari database  
  const childrenData = {
    ahmad: {
      name: "Ahmad Fauzi",
      studentId: "RTQ20240001",
      class: "Al-Baqarah",
      ustadz: "Ustadz Ahmad Subhan",
      targetHafalan: 30,
      currentHafalan: 15,
      attendanceThisMonth: 22,
      totalDaysThisMonth: 24,
      lastAttendance: "Hadir",
      todayStatus: "present",
      recentActivities: [
        { date: "2025-08-05", type: "hafalan", description: "Menyelesaikan Juz 15", time: "10:30" },
        { date: "2025-08-05", type: "attendance", description: "Hadir tepat waktu", time: "07:00" },
        { date: "2025-08-04", type: "achievement", description: "Mendapat bintang dari ustadz", time: "11:00" }
      ],
      upcomingPayments: [
        { type: "SPP Bulanan", amount: 300000, dueDate: "2025-08-15", status: "pending" },
        { type: "Biaya Ujian", amount: 150000, dueDate: "2025-08-20", status: "upcoming" }
      ]
    }
  }

  const currentChild = childrenData[selectedChild as keyof typeof childrenData]

  const dailyQuote = {
    content: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    translation: "Dan barangsiapa yang bertakwa kepada Allah niscaya Dia akan mengadakan baginya jalan keluar",
    reference: "At-Talaq: 2"
  }

  return (
    <ParentLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">
            Assalamu&apos;alaikum, Ayah/Bunda {currentChild.name}
          </h1>
          <p className="opacity-90">
            Pantau perkembangan putra/putri Anda di RTQ Ibnu Mas&apos;ud
          </p>
        </div>

        {/* Daily Quote */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold text-green-800 mb-2">Motivasi Hari Ini</h3>
              <p className="text-lg font-arabic text-green-900 mb-2" dir="rtl">
                {dailyQuote.content}
              </p>
              <p className="text-sm text-green-700 mb-1 italic">
                &quot;{dailyQuote.translation}&quot;
              </p>
              <p className="text-xs text-green-600">
                QS. {dailyQuote.reference}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Student Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress Hafalan</CardTitle>
              <BookOpenIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {currentChild.currentHafalan}/{currentChild.targetHafalan} Juz
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(currentChild.currentHafalan / currentChild.targetHafalan) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((currentChild.currentHafalan / currentChild.targetHafalan) * 100)}% tercapai
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kehadiran Bulan Ini</CardTitle>
              <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {currentChild.attendanceThisMonth}/{currentChild.totalDaysThisMonth}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round((currentChild.attendanceThisMonth / currentChild.totalDaysThisMonth) * 100)}% tingkat kehadiran
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status Pembayaran</CardTitle>
              <CurrencyDollarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Lunas</div>
              <p className="text-xs text-muted-foreground">
                SPP Januari 2025
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ranking Kelas</CardTitle>
              <TrophyIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">#3</div>
              <p className="text-xs text-muted-foreground">
                dari 25 santri
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Perkembangan Terbaru</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Menyelesaikan hafalan Juz 15</p>
                  <p className="text-xs text-gray-500">Hari ini, 10:30 WIB</p>
                  <p className="text-xs text-green-600">Nilai: 85/100 (Baik)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Hadir tepat waktu</p>
                  <p className="text-xs text-gray-500">Hari ini, 07:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Ujian muroja&apos;ah Juz 1-14</p>
                  <p className="text-xs text-gray-500">Kemarin, 14:00 WIB</p>
                  <p className="text-xs text-green-600">Nilai: 90/100 (Sangat Baik)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jadwal Kegiatan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Muroja&apos;ah Pagi</p>
                  <p className="text-xs text-gray-600">Juz 1-14</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">07:00-09:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Hafalan Baru</p>
                  <p className="text-xs text-gray-600">Juz 15</p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">09:30-11:30</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Tahsin & Tajwid</p>
                  <p className="text-xs text-gray-600">Perbaikan bacaan</p>
                </div>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">13:00-14:30</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Grafik Perkembangan Hafalan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <ChartBarIcon className="h-12 w-12 mx-auto mb-2" />
                <p>Grafik perkembangan akan ditampilkan di sini</p>
                <p className="text-sm">Progress hafalan dalam 6 bulan terakhir</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ParentLayout>
  )
}

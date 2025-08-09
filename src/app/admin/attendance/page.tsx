'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  CalendarDaysIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  UserIcon,
  QrCodeIcon
} from '@heroicons/react/24/outline'

// Sample attendance data
const attendanceData = [
  {
    id: 'RTQ20240001',
    name: 'Ahmad Fahri Ramadhan',
    class: 'Al-Baqarah',
    checkIn: '07:25',
    checkOut: '11:30',
    status: 'Hadir',
    date: '2025-08-05'
  },
  {
    id: 'RTQ20240002',
    name: 'Siti Aisyah Nurhaliza',
    class: 'Ali Imran',
    checkIn: '07:20',
    checkOut: '11:25',
    status: 'Hadir',
    date: '2025-08-05'
  },
  {
    id: 'RTQ20240003',
    name: 'Muhammad Ridwan',
    class: 'An-Nisa',
    checkIn: '08:15',
    checkOut: '11:35',
    status: 'Terlambat',
    date: '2025-08-05'
  },
  {
    id: 'RTQ20240004',
    name: 'Fatimah Az-Zahra',
    class: 'Al-Maidah',
    checkIn: '-',
    checkOut: '-',
    status: 'Izin',
    date: '2025-08-05'
  },
  {
    id: 'RTQ20240005',
    name: 'Abdullah Malik',
    class: 'Al-An\'am',
    checkIn: '-',
    checkOut: '-',
    status: 'Alpha',
    date: '2025-08-05'
  }
]

const weeklyStats = {
  totalStudents: 156,
  presentToday: 142,
  lateToday: 8,
  absentToday: 6,
  attendanceRate: 91
}

export default function AttendanceManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDate, setSelectedDate] = useState('2025-08-05')
  const [selectedClass, setSelectedClass] = useState('Semua')

  const filteredAttendance = attendanceData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === 'Semua' || record.class === selectedClass
    return matchesSearch && matchesClass
  })

  const classes = ['Semua', 'Al-Baqarah', 'Ali Imran', 'An-Nisa', 'Al-Maidah', 'Al-An\'am']

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hadir': return 'bg-green-100 text-green-800 border-green-200'
      case 'Terlambat': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Izin': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Alpha': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Hadir': return <CheckCircleIcon className="w-4 h-4 text-green-600" />
      case 'Terlambat': return <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600" />
      case 'Izin': return <ClockIcon className="w-4 h-4 text-blue-600" />
      case 'Alpha': return <XCircleIcon className="w-4 h-4 text-red-600" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 -m-6 p-6">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-600">
              <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L65 45 L70 60 L55 55 L50 70 L45 55 L30 60 L35 45 L20 40 L35 35 L30 20 L45 25 Z"/>
            </svg>
          </div>
        </div>

        <div className="relative space-y-6">
          {/* Header */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent flex items-center">
                    <CalendarDaysIcon className="w-8 h-8 mr-3 text-emerald-600" />
                    Sistem Presensi
                  </CardTitle>
                  <p className="text-blue-700 mt-2">Monitoring kehadiran santri RTQ Ibnu Mas&apos;ud</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <QrCodeIcon className="w-4 h-4 mr-2" />
                    Scan QR
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    Manual Input
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Today's Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Hadir Hari Ini</p>
                    <p className="text-3xl font-bold">{weeklyStats.presentToday}</p>
                  </div>
                  <CheckCircleIcon className="w-12 h-12 text-green-200" />
                </div>
                <div className="mt-2">
                  <div className="text-sm text-green-100">
                    {Math.round((weeklyStats.presentToday / weeklyStats.totalStudents) * 100)}% dari total santri
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100">Terlambat</p>
                    <p className="text-3xl font-bold">{weeklyStats.lateToday}</p>
                  </div>
                  <ExclamationTriangleIcon className="w-12 h-12 text-yellow-200" />
                </div>
                <div className="mt-2">
                  <div className="text-sm text-yellow-100">
                    {Math.round((weeklyStats.lateToday / weeklyStats.totalStudents) * 100)}% dari total santri
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100">Tidak Hadir</p>
                    <p className="text-3xl font-bold">{weeklyStats.absentToday}</p>
                  </div>
                  <XCircleIcon className="w-12 h-12 text-red-200" />
                </div>
                <div className="mt-2">
                  <div className="text-sm text-red-100">
                    {Math.round((weeklyStats.absentToday / weeklyStats.totalStudents) * 100)}% dari total santri
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Tingkat Kehadiran</p>
                    <p className="text-3xl font-bold">{weeklyStats.attendanceRate}%</p>
                  </div>
                  <CalendarDaysIcon className="w-12 h-12 text-blue-200" />
                </div>
                <div className="mt-2">
                  <div className="w-full bg-blue-600 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-500" 
                      style={{width: `${weeklyStats.attendanceRate}%`}}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter and Search */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                  <Input
                    placeholder="Cari nama atau ID santri..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900"
                >
                  {classes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Attendance Table */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                <CalendarDaysIcon className="w-6 h-6 mr-2 text-emerald-600" />
                Presensi Hari Ini - {new Date(selectedDate).toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Santri</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Kelas</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Jam Masuk</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Jam Keluar</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAttendance.map((record, index) => (
                      <tr key={record.id} className={`border-b border-blue-100 hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white/50' : 'bg-blue-25/50'}`}>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                              <UserIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-blue-900">{record.name}</div>
                              <div className="text-sm font-mono text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">
                                {record.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                            {record.class}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <ClockIcon className="w-4 h-4 text-blue-600" />
                            <span className={`font-semibold ${record.checkIn === '-' ? 'text-gray-400' : 'text-blue-900'}`}>
                              {record.checkIn}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <ClockIcon className="w-4 h-4 text-blue-600" />
                            <span className={`font-semibold ${record.checkOut === '-' ? 'text-gray-400' : 'text-blue-900'}`}>
                              {record.checkOut}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(record.status)}`}>
                            {getStatusIcon(record.status)}
                            <span>{record.status}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                              Edit
                            </Button>
                            <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white">
                              Notifikasi
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">Aksi Cepat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white flex flex-col items-center justify-center space-y-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CheckCircleIcon className="w-6 h-6" />
                  <span className="text-sm font-medium">Tandai Semua Hadir</span>
                </Button>
                <Button className="h-16 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white flex flex-col items-center justify-center space-y-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CalendarDaysIcon className="w-6 h-6" />
                  <span className="text-sm font-medium">Laporan Bulanan</span>
                </Button>
                <Button className="h-16 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white flex flex-col items-center justify-center space-y-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <QrCodeIcon className="w-6 h-6" />
                  <span className="text-sm font-medium">Generate QR Code</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}

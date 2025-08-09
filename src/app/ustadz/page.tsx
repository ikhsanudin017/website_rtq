'use client'

import { useState } from 'react'
import { Users, BookOpen, Calendar, MessageSquare, BarChart3, Clock } from 'lucide-react'

export default function UstadzDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Mock data - nanti akan diambil dari database
  const todayStats = {
    totalStudents: 28,
    presentToday: 25,
    lateToday: 1,
    absentToday: 2,
    targetHafalanProgress: 75,
    completedTasks: 12,
    pendingTasks: 3
  }

  const recentStudents = [
    { id: 1, name: "Ahmad Fauzi", status: "present", hafalanProgress: 15, lastUpdate: "10:30" },
    { id: 2, name: "Fatimah Zahra", status: "present", hafalanProgress: 18, lastUpdate: "10:25" },
    { id: 3, name: "Muhammad Rizki", status: "late", hafalanProgress: 22, lastUpdate: "08:15" },
    { id: 4, name: "Khadijah Nur", status: "present", hafalanProgress: 20, lastUpdate: "09:45" },
    { id: 5, name: "Ali Hassan", status: "absent", hafalanProgress: 12, lastUpdate: "Kemarin" }
  ]

  const quickActions = [
    { title: "Input Absensi", icon: Calendar, color: "bg-emerald-500", href: "/ustadz/absensi" },
    { title: "Update Hafalan", icon: BookOpen, color: "bg-blue-500", href: "/ustadz/hafalan" },
    { title: "Pesan Orang Tua", icon: MessageSquare, color: "bg-purple-500", href: "/ustadz/komunikasi" },
    { title: "Laporan Santri", icon: BarChart3, color: "bg-orange-500", href: "/ustadz/laporan" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800'
      case 'late': return 'bg-yellow-100 text-yellow-800'
      case 'absent': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present': return 'Hadir'
      case 'late': return 'Terlambat'
      case 'absent': return 'Tidak Hadir'
      default: return 'Unknown'
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Assalamu&apos;alaikum, Ustadz!
            </h1>
            <p className="opacity-90">
              Selamat datang di dashboard pengajar RTQ Ibnu Mas&apos;ud
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-emerald-100 mb-1">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">Hari ini</span>
            </div>
            <div className="text-xl font-semibold">
              {new Date().toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-emerald-500">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Santri</p>
              <p className="text-2xl font-semibold text-gray-900">{todayStats.totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Hadir Hari Ini</p>
              <p className="text-2xl font-semibold text-gray-900">{todayStats.presentToday}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Terlambat</p>
              <p className="text-2xl font-semibold text-gray-900">{todayStats.lateToday}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tidak Hadir</p>
              <p className="text-2xl font-semibold text-gray-900">{todayStats.absentToday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center space-y-2 group hover:scale-105 transform duration-200`}
            >
              <action.icon className="w-8 h-8" />
              <span className="text-sm font-medium text-center">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Students Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Aktivitas Santri Terbaru</h2>
          <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
            Lihat Semua
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Nama Santri</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Progress Hafalan</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Terakhir Update</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{student.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                      {getStatusText(student.status)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {student.hafalanProgress} Juz
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-emerald-600 h-1.5 rounded-full"
                            style={{ width: `${(student.hafalanProgress / 30) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {student.lastUpdate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Daily Islamic Quote */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-6 border border-emerald-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Hadits Hari Ini</h3>
          <blockquote className="text-emerald-700 text-lg font-medium mb-2">
            &ldquo;مَنْ عَلَّمَ عِلْمًا فَلَهُ أَجْرُ مَنْ عَمِلَ بِهِ لَا يَنْقُصُ مِنْ أَجْرِ الْعَامِلِ شَيْئًا&rdquo;
          </blockquote>
          <p className="text-emerald-600 text-sm italic">
            &ldquo;Barangsiapa yang mengajarkan suatu ilmu, maka baginya pahala orang yang mengamalkannya, 
            tanpa mengurangi pahala orang yang mengamalkannya sedikitpun.&rdquo;
          </p>
          <p className="text-emerald-500 text-xs mt-2">- HR. Ibnu Majah</p>
        </div>
      </div>
    </div>
  )
}
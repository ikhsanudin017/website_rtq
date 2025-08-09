"use client"

import { useState } from 'react'
import { Plus, BookOpen, Star, Trophy, Search, Filter } from 'lucide-react'

export default function UstadzHafalanPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClass, setSelectedClass] = useState('all')

  // Mock data - nanti akan diambil dari database
  const hafalanData = [
    {
      id: 1,
      name: "Ahmad Fauzi",
      studentId: "RTQ20240001",
      class: "Al-Baqarah",
      currentJuz: 15,
      currentSurah: "Al-Isra",
      currentAyah: 45,
      totalAyah: 111,
      targetJuz: 30,
      lastUpdate: "2025-01-13",
      status: "active",
      achievements: ["Juz 10 Lancar", "Tajwid Baik"],
      notes: "Progres sangat baik, suara jelas"
    },
    {
      id: 2,
      name: "Fatimah Zahra",
      studentId: "RTQ20240002", 
      class: "Al-Baqarah",
      currentJuz: 18,
      currentSurah: "Al-Kahf",
      currentAyah: 25,
      totalAyah: 110,
      targetJuz: 30,
      lastUpdate: "2025-01-13",
      status: "active",
      achievements: ["Juz 15 Mumtaz", "Tilawah Indah"],
      notes: "Sangat memahami makna ayat"
    },
    {
      id: 3,
      name: "Muhammad Rizki",
      studentId: "RTQ20240003",
      class: "Ali Imran",
      currentJuz: 22,
      currentSurah: "Al-Hajj",
      currentAyah: 30,
      totalAyah: 78,
      targetJuz: 30,
      lastUpdate: "2025-01-12",
      status: "active",
      achievements: ["Juz 20 Lancar", "Makhraj Baik"],
      notes: "Perlu latihan lebih pada panjang pendek"
    },
    {
      id: 4,
      name: "Khadijah Nur",
      studentId: "RTQ20240004",
      class: "Ali Imran",
      currentJuz: 20,
      currentSurah: "Taha",
      currentAyah: 85,
      totalAyah: 135,
      targetJuz: 30,
      lastUpdate: "2025-01-13",
      status: "active",
      achievements: ["Juz 18 Mumtaz"],
      notes: "Konsisten dalam muraja&apos;ah"
    }
  ]

  const classes = ['all', 'Al-Baqarah', 'Ali Imran', 'An-Nisa', 'Al-Maidah']

  const filteredData = hafalanData.filter(data => {
    const matchesSearch = data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         data.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === 'all' || data.class === selectedClass
    return matchesSearch && matchesClass
  })

  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100
    if (percentage >= 75) return 'bg-green-500'
    if (percentage >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getStatusBadge = (current: number, target: number) => {
    const percentage = (current / target) * 100
    if (percentage >= 90) return { text: 'Sangat Baik', color: 'bg-green-100 text-green-800' }
    if (percentage >= 70) return { text: 'Baik', color: 'bg-blue-100 text-blue-800' }
    if (percentage >= 50) return { text: 'Cukup', color: 'bg-yellow-100 text-yellow-800' }
    return { text: 'Perlu Bimbingan', color: 'bg-red-100 text-red-800' }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Progress Hafalan</h1>
        <p className="text-gray-600">Pantau dan kelola progress hafalan Al-Qur'an santri</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Total Santri</p>
              <p className="text-2xl font-semibold text-gray-900">{hafalanData.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Trophy className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Rata-rata Juz</p>
              <p className="text-2xl font-semibold text-gray-900">
                {Math.round(hafalanData.reduce((acc, data) => acc + data.currentJuz, 0) / hafalanData.length)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Target Tercapai</p>
              <p className="text-2xl font-semibold text-gray-900">
                {hafalanData.filter(data => (data.currentJuz / data.targetJuz) >= 0.8).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Plus className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Update Hari Ini</p>
              <p className="text-2xl font-semibold text-gray-900">
                {hafalanData.filter(data => data.lastUpdate === '2025-01-13').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari nama santri atau ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
              >
                {classes.map(cls => (
                  <option key={cls} value={cls}>
                    {cls === 'all' ? 'Semua Kelas' : cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Update Progress
          </button>
        </div>
      </div>

      {/* Hafalan Progress List */}
      <div className="space-y-4">
        {filteredData.map((data) => {
          const statusBadge = getStatusBadge(data.currentJuz, data.targetJuz)
          const progressPercentage = (data.currentJuz / data.targetJuz) * 100
          const surahProgress = (data.currentAyah / data.totalAyah) * 100

          return (
            <div key={data.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-emerald-300 transition-colors">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-lg">
                        {data.currentJuz}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
                      <p className="text-sm text-gray-500">{data.studentId} • {data.class}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Sedang menghafal: <span className="font-medium">{data.currentSurah}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge.color}`}>
                      {statusBadge.text}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-emerald-600 rounded-lg hover:bg-emerald-50">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3 mb-4">
                  {/* Juz Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Progress Juz</span>
                      <span className="text-sm text-gray-500">
                        {data.currentJuz}/{data.targetJuz} Juz ({Math.round(progressPercentage)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(data.currentJuz, data.targetJuz)}`}
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Surah Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Progress Surah {data.currentSurah}</span>
                      <span className="text-sm text-gray-500">
                        {data.currentAyah}/{data.totalAyah} Ayat ({Math.round(surahProgress)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${surahProgress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                {data.achievements.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Pencapaian:</p>
                    <div className="flex flex-wrap gap-2">
                      {data.achievements.map((achievement, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                {data.notes && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 italic">{data.notes}</p>
                  </div>
                )}

                {/* Last Update */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Terakhir diupdate: {new Date(data.lastUpdate).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

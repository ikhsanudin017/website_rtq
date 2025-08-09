"use client"

import { useState } from 'react'
import { Check, X, Clock, Search, Filter } from 'lucide-react'

export default function UstadzAbsensiPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClass, setSelectedClass] = useState('all')

  // Mock data - nanti akan diambil dari database
  const santriData = [
    {
      id: 1,
      name: "Ahmad Fauzi",
      studentId: "RTQ20240001",
      class: "Al-Baqarah",
      status: "present", // present, late, absent, excused
      time: "07:00",
      note: ""
    },
    {
      id: 2,
      name: "Fatimah Zahra",
      studentId: "RTQ20240002", 
      class: "Al-Baqarah",
      status: "present",
      time: "07:05",
      note: ""
    },
    {
      id: 3,
      name: "Muhammad Rizki",
      studentId: "RTQ20240003",
      class: "Ali Imran",
      status: "late",
      time: "07:30",
      note: "Terlambat karena hujan"
    },
    {
      id: 4,
      name: "Khadijah Nur",
      studentId: "RTQ20240004",
      class: "Ali Imran",
      status: "absent",
      time: "",
      note: "Sakit demam"
    },
    {
      id: 5,
      name: "Abdullah Hasan",
      studentId: "RTQ20240005",
      class: "Al-Baqarah",
      status: "present",
      time: "06:55",
      note: ""
    }
  ]

  const classes = ['all', 'Al-Baqarah', 'Ali Imran', 'An-Nisa', 'Al-Maidah']

  const [attendanceData, setAttendanceData] = useState(santriData)

  const updateAttendance = (id: number, status: string, note = '') => {
    setAttendanceData(prev => 
      prev.map(santri => 
        santri.id === id 
          ? { 
              ...santri, 
              status, 
              note,
              time: status === 'present' || status === 'late' ? new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : ''
            }
          : santri
      )
    )
  }

  const filteredSantri = attendanceData.filter(santri => {
    const matchesSearch = santri.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         santri.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === 'all' || santri.class === selectedClass
    return matchesSearch && matchesClass
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800'
      case 'late': return 'bg-yellow-100 text-yellow-800'
      case 'absent': return 'bg-red-100 text-red-800'
      case 'excused': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present': return 'Hadir'
      case 'late': return 'Terlambat'
      case 'absent': return 'Tidak Hadir'
      case 'excused': return 'Izin'
      default: return 'Belum Diisi'
    }
  }

  const stats = {
    total: filteredSantri.length,
    present: filteredSantri.filter(s => s.status === 'present').length,
    late: filteredSantri.filter(s => s.status === 'late').length,
    absent: filteredSantri.filter(s => s.status === 'absent').length,
    excused: filteredSantri.filter(s => s.status === 'excused').length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Absensi Santri</h1>
        <p className="text-gray-600">Kelola kehadiran santri harian</p>
      </div>

      {/* Date and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Tanggal Absensi
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Kehadiran</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.present}</div>
              <div className="text-sm text-gray-600">Hadir</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.late}</div>
              <div className="text-sm text-gray-600">Terlambat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{stats.absent}</div>
              <div className="text-sm text-gray-600">Tidak Hadir</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.excused}</div>
              <div className="text-sm text-gray-600">Izin</div>
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
        </div>
      </div>

      {/* Attendance List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Daftar Kehadiran</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredSantri.map((santri) => (
            <div key={santri.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-medium text-sm">
                        {santri.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{santri.name}</p>
                    <p className="text-sm text-gray-500">{santri.studentId} • {santri.class}</p>
                    {santri.time && (
                      <p className="text-xs text-gray-400">Waktu: {santri.time}</p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(santri.status)}`}>
                      {getStatusText(santri.status)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => updateAttendance(santri.id, 'present')}
                    className={`p-2 rounded-lg transition-colors ${
                      santri.status === 'present' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400 hover:bg-green-100 hover:text-green-600'
                    }`}
                    title="Hadir"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => updateAttendance(santri.id, 'late')}
                    className={`p-2 rounded-lg transition-colors ${
                      santri.status === 'late' 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'bg-gray-100 text-gray-400 hover:bg-yellow-100 hover:text-yellow-600'
                    }`}
                    title="Terlambat"
                  >
                    <Clock className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => updateAttendance(santri.id, 'absent')}
                    className={`p-2 rounded-lg transition-colors ${
                      santri.status === 'absent' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'
                    }`}
                    title="Tidak Hadir"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {santri.note && (
                <div className="mt-2 ml-14">
                  <p className="text-sm text-gray-600 italic">Catatan: {santri.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
          Simpan Absensi
        </button>
      </div>
    </div>
  )
}

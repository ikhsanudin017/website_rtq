'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  UserGroupIcon, 
  PlusIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  UserIcon
} from '@heroicons/react/24/outline'

// Sample data santri
const sampleStudents = [
  {
    id: 'RTQ20240001',
    name: 'Ahmad Fahri Ramadhan',
    class: 'Al-Baqarah',
    hafalan: '15 Juz',
    attendance: '95%',
    payment: 'Lunas',
    phone: '081234567890',
    parentName: 'Budi Santoso',
    joinDate: '2024-01-15'
  },
  {
    id: 'RTQ20240002',
    name: 'Siti Aisyah Nurhaliza',
    class: 'Ali Imran',
    hafalan: '12 Juz',
    attendance: '98%',
    payment: 'Lunas',
    phone: '081234567891',
    parentName: 'Sari Dewi',
    joinDate: '2024-01-20'
  },
  {
    id: 'RTQ20240003',
    name: 'Muhammad Ridwan',
    class: 'An-Nisa',
    hafalan: '10 Juz',
    attendance: '92%',
    payment: 'Tertunggak',
    phone: '081234567892',
    parentName: 'Ahmad Subhan',
    joinDate: '2024-02-01'
  },
  {
    id: 'RTQ20240004',
    name: 'Fatimah Az-Zahra',
    class: 'Al-Maidah',
    hafalan: '8 Juz',
    attendance: '97%',
    payment: 'Lunas',
    phone: '081234567893',
    parentName: 'Nur Halim',
    joinDate: '2024-02-10'
  },
  {
    id: 'RTQ20240005',
    name: 'Abdullah Malik',
    class: 'Al-An\'am',
    hafalan: '6 Juz',
    attendance: '89%',
    payment: 'Lunas',
    phone: '081234567894',
    parentName: 'Malik Ibrahim',
    joinDate: '2024-02-15'
  }
]

export default function SantriManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClass, setSelectedClass] = useState('Semua')
  const [showAddForm, setShowAddForm] = useState(false)

  const filteredStudents = sampleStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === 'Semua' || student.class === selectedClass
    return matchesSearch && matchesClass
  })

  const classes = ['Semua', 'Al-Baqarah', 'Ali Imran', 'An-Nisa', 'Al-Maidah', 'Al-An\'am']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 -m-6 p-6">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 opacity-10 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600">
              <path d="M50 0 L60 20 L80 15 L70 35 L90 40 L70 45 L80 65 L60 60 L50 80 L40 60 L20 65 L30 45 L10 40 L30 35 L20 15 L40 20 Z"/>
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
                    <UserGroupIcon className="w-8 h-8 mr-3 text-blue-600" />
                    Manajemen Santri
                  </CardTitle>
                  <p className="text-blue-700 mt-2">Kelola data santri RTQ Ibnu Mas&apos;ud</p>
                </div>
                <Button 
                  onClick={() => setShowAddForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Tambah Santri
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Total Santri Aktif</p>
                    <p className="text-3xl font-bold">{sampleStudents.length}</p>
                  </div>
                  <UserGroupIcon className="w-12 h-12 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100">Kehadiran Rata-rata</p>
                    <p className="text-3xl font-bold">94%</p>
                  </div>
                  <CalendarDaysIcon className="w-12 h-12 text-emerald-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Hafalan Rata-rata</p>
                    <p className="text-3xl font-bold">10.2 Juz</p>
                  </div>
                  <BookOpenIcon className="w-12 h-12 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
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

          {/* Students Table */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">
                Daftar Santri ({filteredStudents.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">ID Santri</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Nama</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Kelas</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Hafalan</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Kehadiran</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Pembayaran</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student, index) => (
                      <tr key={student.id} className={`border-b border-blue-100 hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white/50' : 'bg-blue-25/50'}`}>
                        <td className="py-4 px-4">
                          <div className="font-mono text-sm text-blue-800 bg-blue-100 px-2 py-1 rounded">
                            {student.id}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                              <UserIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-blue-900">{student.name}</div>
                              <div className="text-sm text-blue-600">Wali: {student.parentName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                            {student.class}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <BookOpenIcon className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-800">{student.hafalan}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              parseFloat(student.attendance) >= 95 ? 'bg-green-500' :
                              parseFloat(student.attendance) >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                            <span className="font-semibold text-blue-900">{student.attendance}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            student.payment === 'Lunas' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {student.payment}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                              <EyeIcon className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                              <PencilIcon className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
                              <TrashIcon className="w-3 h-3" />
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
        </div>
      </div>
  )
}

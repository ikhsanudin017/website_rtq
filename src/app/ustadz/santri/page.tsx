import { useState } from 'react'
import { Eye, UserPlus, Phone, MessageCircle } from 'lucide-react'

export default function UstadzSantriPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClass, setSelectedClass] = useState('all')

  // Mock data - nanti akan diambil dari database
  const santriData = [
    {
      id: 1,
      name: "Ahmad Fauzi",
      studentId: "RTQ20240001",
      class: "Al-Baqarah",
      age: 12,
      parentName: "Budi Hartono",
      parentPhone: "08123456789",
      hafalanProgress: 15,
      targetHafalan: 30,
      attendanceRate: 95,
      status: "active",
      lastActivity: "2025-01-13"
    },
    {
      id: 2,
      name: "Fatimah Zahra",
      studentId: "RTQ20240002", 
      class: "Al-Baqarah",
      age: 11,
      parentName: "Siti Aminah",
      parentPhone: "08123456788",
      hafalanProgress: 18,
      targetHafalan: 30,
      attendanceRate: 98,
      status: "active",
      lastActivity: "2025-01-13"
    },
    {
      id: 3,
      name: "Muhammad Rizki",
      studentId: "RTQ20240003",
      class: "Ali Imran",
      age: 13,
      parentName: "Ahmad Sudirman",
      parentPhone: "08123456787",
      hafalanProgress: 22,
      targetHafalan: 30,
      attendanceRate: 88,
      status: "active",
      lastActivity: "2025-01-12"
    },
    {
      id: 4,
      name: "Khadijah Nur",
      studentId: "RTQ20240004",
      class: "Ali Imran",
      age: 12,
      parentName: "Fatmawati",
      parentPhone: "08123456786",
      hafalanProgress: 20,
      targetHafalan: 30,
      attendanceRate: 92,
      status: "active",
      lastActivity: "2025-01-13"
    }
  ]

  const classes = ['all', 'Al-Baqarah', 'Ali Imran', 'An-Nisa', 'Al-Maidah']

  const filteredSantri = santriData.filter(santri => {
    const matchesSearch = santri.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         santri.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === 'all' || santri.class === selectedClass
    return matchesSearch && matchesClass
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Data Santri</h1>
        <p className="text-gray-600">Kelola dan pantau data santri di TPQ</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Cari nama santri atau ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="w-full md:w-48">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>
                  {cls === 'all' ? 'Semua Kelas' : cls}
                </option>
              ))}
            </select>
          </div>
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Tambah Santri
          </button>
        </div>
      </div>

      {/* Santri List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Santri
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kelas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hafalan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kehadiran
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orang Tua
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSantri.map((santri) => (
                <tr key={santri.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{santri.name}</div>
                      <div className="text-sm text-gray-500">{santri.studentId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {santri.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {santri.hafalanProgress}/{santri.targetHafalan} Juz
                          </span>
                          <span className="text-sm text-gray-500">
                            {Math.round((santri.hafalanProgress / santri.targetHafalan) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-emerald-600 h-1.5 rounded-full"
                            style={{ width: `${(santri.hafalanProgress / santri.targetHafalan) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        santri.attendanceRate >= 95 ? 'bg-green-100 text-green-800' :
                        santri.attendanceRate >= 80 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {santri.attendanceRate}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{santri.parentName}</div>
                      <div className="text-sm text-gray-500">{santri.parentPhone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-emerald-600 hover:text-emerald-900 p-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 p-1 rounded">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium leading-6 text-gray-900">Total Santri</p>
              <p className="text-2xl font-semibold leading-none text-gray-900">{santriData.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium leading-6 text-gray-900">Santri Aktif</p>
              <p className="text-2xl font-semibold leading-none text-gray-900">{santriData.filter(s => s.status === 'active').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium leading-6 text-gray-900">Rata-rata Hafalan</p>
              <p className="text-2xl font-semibold leading-none text-gray-900">
                {Math.round(santriData.reduce((acc, s) => acc + s.hafalanProgress, 0) / santriData.length)} Juz
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium leading-6 text-gray-900">Rata-rata Kehadiran</p>
              <p className="text-2xl font-semibold leading-none text-gray-900">
                {Math.round(santriData.reduce((acc, s) => acc + s.attendanceRate, 0) / santriData.length)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

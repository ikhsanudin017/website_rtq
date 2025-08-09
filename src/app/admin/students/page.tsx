'use client'

"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon 
} from '@heroicons/react/24/outline'

interface Student {
  id: string
  studentId: string
  name: string
  birthDate: string
  address: string
  phone?: string
  parentName: string
  parentPhone: string
  parentEmail?: string
  classLevel: string
  targetHafalan: number
  isActive: boolean
  createdAt: string
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/students')
      const data = await response.json()
      setStudents(data.students || [])
    } catch (error) {
      console.error('Error fetching students:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (searchTerm: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/students?search=${encodeURIComponent(searchTerm)}`)
      const data = await response.json()
      setStudents(data.students || [])
    } catch (error) {
      console.error('Error searching students:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data Santri</h1>
          <p className="text-gray-600">Kelola data santri RTQ Ibnu Mas&apos;ud</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Tambah Santri
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Cari santri berdasarkan nama, NIS, atau nama orang tua..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
              </div>
              <Button 
                variant="outline" 
                onClick={() => handleSearch(search)}
                disabled={loading}
              >
                Cari
              </Button>
            </div>
          </CardContent>
        </Card>

      {/* Students Table */}
      <Card>
          <CardHeader>
            <CardTitle>Daftar Santri ({students.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-500 mt-2">Memuat data santri...</p>
              </div>
            ) : students.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>Belum ada data santri</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">NIS</th>
                      <th className="text-left p-2">Nama Santri</th>
                      <th className="text-left p-2">Kelas</th>
                      <th className="text-left p-2">Orang Tua</th>
                      <th className="text-left p-2">No. HP</th>
                      <th className="text-left p-2">Target</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-mono text-sm">{student.studentId}</td>
                        <td className="p-2">
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(student.birthDate).toLocaleDateString('id-ID')}
                            </p>
                          </div>
                        </td>
                        <td className="p-2">{student.classLevel}</td>
                        <td className="p-2">
                          <div>
                            <p>{student.parentName}</p>
                            <p className="text-xs text-gray-500">{student.parentEmail}</p>
                          </div>
                        </td>
                        <td className="p-2">{student.parentPhone}</td>
                        <td className="p-2">{student.targetHafalan} Juz</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            student.isActive 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {student.isActive ? 'Aktif' : 'Non-aktif'}
                          </span>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <PencilIcon className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <TrashIcon className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

      {/* Add Student Form Modal - akan ditambah nanti */}
      {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-lg font-bold mb-4">Tambah Santri Baru</h3>
              <p className="text-gray-600 mb-4">Form akan ditambahkan di versi selanjutnya</p>
              <Button onClick={() => setShowAddForm(false)}>
                Tutup
              </Button>
            </div>
          </div>
        )}
    </div>
  )
}

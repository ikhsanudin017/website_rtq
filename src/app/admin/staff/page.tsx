'use client'

import { useState, useEffect } from 'react'

interface Staff {
  id: string
  name: string
  position: string
  phone?: string
  email?: string
  isActive: boolean
  joinDate: string
}

export default function StaffPage() {
  const [staff, setStaff] = useState<Staff[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null)

  useEffect(() => {
    fetchStaff()
  }, [])

  const fetchStaff = async () => {
    try {
      const response = await fetch('/api/admin/staff')
      if (response.ok) {
        const data = await response.json()
        setStaff(data)
      }
    } catch (error) {
      console.error('Error fetching staff:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddStaff = () => {
    setEditingStaff(null)
    setShowForm(true)
  }

  const handleEditStaff = (staffMember: Staff) => {
    setEditingStaff(staffMember)
    setShowForm(true)
  }

  const handleDeleteStaff = async (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data staff ini?')) {
      try {
        const response = await fetch(`/api/admin/staff/${id}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          fetchStaff()
        }
      } catch (error) {
        console.error('Error deleting staff:', error)
      }
    }
  }

  const positionLabels: Record<string, string> = {
    'KETUA': 'Ketua',
    'SEKRETARIS': 'Sekretaris',
    'BENDAHARA': 'Bendahara',
    'MUSYRIF': 'Musyrif',
    'USTADZ': 'Ustadz',
    'USTADZAH': 'Ustadzah',
    'ADMIN': 'Admin'
  }

  if (loading) {
    return (
      <div className="space-y-6 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Data Staff & Pengurus</h1>
          <p className="text-blue-700 mt-1">Kelola data pengurus dan pengajar RTQ</p>
        </div>
        <button
          onClick={handleAddStaff}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <span className="mr-2">➕</span>
          Tambah Staff Baru
        </button>
      </div>

      {/* Staff List */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Posisi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kontak
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staff.map((staffMember) => (
                <tr key={staffMember.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-xl">👨‍🏫</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {staffMember.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Bergabung: {new Date(staffMember.joinDate).toLocaleDateString('id-ID')}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                      {positionLabels[staffMember.position] || staffMember.position}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      {staffMember.phone && (
                        <div className="flex items-center">
                          <span className="mr-1">📞</span>
                          {staffMember.phone}
                        </div>
                      )}
                      {staffMember.email && (
                        <div className="flex items-center mt-1">
                          <span className="mr-1">📧</span>
                          {staffMember.email}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      staffMember.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {staffMember.isActive ? 'Aktif' : 'Tidak Aktif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditStaff(staffMember)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDeleteStaff(staffMember.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        🗑️ Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {staff.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl">👨‍🏫</span>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Belum ada data staff</h3>
            <p className="mt-1 text-sm text-gray-500">
              Mulai dengan menambahkan staff pertama.
            </p>
            <div className="mt-6">
              <button
                onClick={handleAddStaff}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Tambah Staff
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <StaffForm
          staff={editingStaff}
          onClose={() => setShowForm(false)}
          onSave={() => {
            setShowForm(false)
            fetchStaff()
          }}
        />
      )}
    </div>
  )
}

// Staff Form Component
function StaffForm({ 
  staff, 
  onClose, 
  onSave 
}: { 
  staff: Staff | null
  onClose: () => void
  onSave: () => void 
}) {
  const [formData, setFormData] = useState({
    name: staff?.name || '',
    position: staff?.position || 'USTADZ',
    phone: staff?.phone || '',
    email: staff?.email || '',
    isActive: staff?.isActive ?? true
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const url = staff 
        ? `/api/admin/staff/${staff.id}` 
        : '/api/admin/staff'
      
      const response = await fetch(url, {
        method: staff ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        onSave()
      }
    } catch (error) {
      console.error('Error saving staff:', error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {staff ? 'Edit Staff' : 'Tambah Staff Baru'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Posisi
            </label>
            <select
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="KETUA">Ketua</option>
              <option value="SEKRETARIS">Sekretaris</option>
              <option value="BENDAHARA">Bendahara</option>
              <option value="MUSYRIF">Musyrif</option>
              <option value="USTADZ">Ustadz</option>
              <option value="USTADZAH">Ustadzah</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              No. Telepon
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
              className="mr-2"
            />
            <label className="text-sm text-gray-700">Staff Aktif</label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

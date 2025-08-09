'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, Eye, EyeOff, Users, Search, Filter } from 'lucide-react'

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  // Mock data users - nanti akan dari database
  const [users, setUsers] = useState([
    // Admin users
    { id: 1, username: 'admin', name: 'Administrator RTQ', role: 'admin', email: 'admin@rtq.id', phone: '081234567890', status: 'active', createdAt: '2025-01-01' },
    { id: 2, username: 'superadmin', name: 'Super Administrator', role: 'admin', email: 'super@rtq.id', phone: '081234567891', status: 'active', createdAt: '2025-01-01' },
    
    // Ustadz users
    { id: 3, username: 'ustadz1', name: 'Ustadz Ahmad Subhan', role: 'ustadz', email: 'ahmad@rtq.id', phone: '081234567892', status: 'active', createdAt: '2025-01-02', specialization: 'Tahfidz', class: 'Al-Baqarah' },
    { id: 4, username: 'ustadz2', name: 'Ustadzah Fatimah', role: 'ustadz', email: 'fatimah@rtq.id', phone: '081234567893', status: 'active', createdAt: '2025-01-02', specialization: 'Tilawah', class: 'Ali Imran' },
    
    // Parent users
    { id: 5, username: 'RTQ20240001', name: 'Budi Hartono', role: 'parent', email: 'budi@email.com', phone: '081234567894', status: 'active', createdAt: '2025-01-03', childName: 'Ahmad Fauzi', childClass: 'Al-Baqarah' },
    { id: 6, username: 'RTQ20240002', name: 'Siti Aminah', role: 'parent', email: 'siti@email.com', phone: '081234567895', status: 'active', createdAt: '2025-01-03', childName: 'Fatimah Zahra', childClass: 'Al-Baqarah' },
    { id: 7, username: 'RTQ20240003', name: 'Ahmad Sudirman', role: 'parent', email: 'sudirman@email.com', phone: '081234567896', status: 'active', createdAt: '2025-01-04', childName: 'Muhammad Rizki', childClass: 'Ali Imran' }
  ])

  const [newUser, setNewUser] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    role: 'parent',
    password: '',
    specialization: '',
    class: '',
    childName: '',
    childClass: ''
  })

  const roles = ['all', 'admin', 'ustadz', 'parent']
  const classes = ['Al-Baqarah', 'Ali Imran', 'An-Nisa', 'Al-Maidah']
  const specializations = ['Tahfidz', 'Tilawah', 'Tajwid', 'Fiqh']

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === 'all' || user.role === selectedRole
    return matchesSearch && matchesRole
  })

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-blue-100 text-blue-800'
      case 'ustadz':
        return 'bg-green-100 text-green-800'
      case 'parent':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrator'
      case 'ustadz':
        return 'Ustadz/Pengajar'
      case 'parent':
        return 'Orang Tua'
      default:
        return role
    }
  }

  const handleAddUser = () => {
    const id = users.length + 1
    const user = {
      ...newUser,
      id,
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0]
    }
    
    setUsers([...users, user])
    setNewUser({
      username: '',
      name: '',
      email: '',
      phone: '',
      role: 'parent',
      password: '',
      specialization: '',
      class: '',
      childName: '',
      childClass: ''
    })
    setShowAddModal(false)
  }

  const handleDeleteUser = (userId: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus user ini?')) {
      setUsers(users.filter(user => user.id !== userId))
    }
  }

  const generateUsername = () => {
    if (newUser.role === 'parent') {
      // Generate student ID format for parents
      const year = new Date().getFullYear()
      const nextId = String(users.filter(u => u.role === 'parent').length + 1).padStart(4, '0')
      setNewUser({ ...newUser, username: `RTQ${year}${nextId}` })
    } else {
      // Generate simple username for admin/ustadz
      const baseName = newUser.name.toLowerCase().replace(/\s+/g, '')
      setNewUser({ ...newUser, username: baseName })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Manajemen User</h1>
        <p className="text-gray-600">Kelola semua user sistem RTQ (Admin, Ustadz, dan Orang Tua)</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total User</p>
              <p className="text-2xl font-semibold text-gray-900">{users.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Admin</p>
              <p className="text-2xl font-semibold text-gray-900">{users.filter(u => u.role === 'admin').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Ustadz</p>
              <p className="text-2xl font-semibold text-gray-900">{users.filter(u => u.role === 'ustadz').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Orang Tua</p>
              <p className="text-2xl font-semibold text-gray-900">{users.filter(u => u.role === 'parent').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Add Button */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari nama, username, atau email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role === 'all' ? 'Semua Role' : getRoleText(role)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Tambah User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kontak
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Info Tambahan
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
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">@{user.username}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                      {getRoleText(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                    <div className="text-sm text-gray-500">{user.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {user.role === 'ustadz' && (
                        <>
                          <div>Kelas: {user.class}</div>
                          <div className="text-gray-500">Spesialisasi: {user.specialization}</div>
                        </>
                      )}
                      {user.role === 'parent' && (
                        <>
                          <div>Anak: {user.childName}</div>
                          <div className="text-gray-500">Kelas: {user.childClass}</div>
                        </>
                      )}
                      {user.role === 'admin' && (
                        <span className="text-gray-500">Full Access</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {user.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-900 p-1 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tambah User Baru</h3>
            
            <div className="space-y-4">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="parent">Orang Tua</option>
                  <option value="ustadz">Ustadz/Pengajar</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              {/* Basic Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={newUser.role === 'parent' ? 'RTQ20250001' : 'username'}
                  />
                  <button
                    type="button"
                    onClick={generateUsername}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                  >
                    Generate
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. Telepon</label>
                <input
                  type="tel"
                  value={newUser.phone}
                  onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="081234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Role-specific fields */}
              {newUser.role === 'ustadz' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kelas yang Diajar</label>
                    <select
                      value={newUser.class}
                      onChange={(e) => setNewUser({ ...newUser, class: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Pilih Kelas</option>
                      {classes.map(cls => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Spesialisasi</label>
                    <select
                      value={newUser.specialization}
                      onChange={(e) => setNewUser({ ...newUser, specialization: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Pilih Spesialisasi</option>
                      {specializations.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {newUser.role === 'parent' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Anak</label>
                    <input
                      type="text"
                      value={newUser.childName}
                      onChange={(e) => setNewUser({ ...newUser, childName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nama lengkap anak"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kelas Anak</label>
                    <select
                      value={newUser.childClass}
                      onChange={(e) => setNewUser({ ...newUser, childClass: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Pilih Kelas</option>
                      {classes.map(cls => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Batal
              </button>
              <button
                onClick={handleAddUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Tambah User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

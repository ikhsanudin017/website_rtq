'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface DashboardStats {
  totalStudents: number
  totalStaff: number
  totalPaymentsPending: number
  presentToday: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalStudents: 0,
    totalStaff: 0,
    totalPaymentsPending: 0,
    presentToday: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/dashboard')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const menuItems = [
    {
      title: 'Data Santri',
      description: 'Kelola data santri dan orang tua',
      href: '/admin/students',
      icon: '👥',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      title: 'Data Staff & Pengurus',
      description: 'Kelola data pengurus dan pengajar',
      href: '/admin/staff',
      icon: '👨‍🏫',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      title: 'Absensi',
      description: 'Kelola absensi harian santri',
      href: '/admin/attendance',
      icon: '📋',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'
    },
    {
      title: 'Pembayaran',
      description: 'Kelola pembayaran SPP dan lainnya',
      href: '/admin/payments',
      icon: '💰',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      title: 'Laporan',
      description: 'Lihat laporan dan statistik',
      href: '/admin/reports',
      icon: '📊',
      color: 'bg-red-50 border-red-200 hover:bg-red-100'
    },
    {
      title: 'Pengaturan',
      description: 'Pengaturan sistem',
      href: '/admin/settings',
      icon: '⚙️',
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }
  ]

  if (loading) {
    return (
      <div className="space-y-8 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Dashboard Administrator
        </h1>
        <p className="text-blue-700">
          Selamat datang di sistem manajemen RTQ Ibnu Masud Prambanan
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Santri</p>
              <p className="text-2xl font-bold text-blue-900">{stats.totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-2xl">👨‍🏫</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Staff</p>
              <p className="text-2xl font-bold text-green-900">{stats.totalStaff}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <span className="text-2xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pembayaran Pending</p>
              <p className="text-2xl font-bold text-yellow-900">{stats.totalPaymentsPending}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <span className="text-2xl">📋</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Hadir Hari Ini</p>
              <p className="text-2xl font-bold text-purple-900">{stats.presentToday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`block p-6 border rounded-lg transition-colors ${item.color}`}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{item.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h3>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
            Sistem berhasil dimuat
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
            Database tersinkronisasi
          </div>
        </div>
      </div>
    </div>
  )
}

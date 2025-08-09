'use client'

import Link from 'next/link'

export default function AdminDashboard() {
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
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Sistem Admin RTQ</h3>
        <p className="text-gray-600">Dashboard administrator sedang dikembangkan.</p>
      </div>
    </div>
  )
}

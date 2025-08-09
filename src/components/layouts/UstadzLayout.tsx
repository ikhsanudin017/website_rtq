'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { 
  HomeIcon, 
  UserGroupIcon, 
  CalendarDaysIcon, 
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const ustadzNavigation = [
  { name: 'Dashboard', href: '/ustadz', icon: HomeIcon },
  { name: 'Santri Saya', href: '/ustadz/students', icon: UserGroupIcon },
  { name: 'Absensi', href: '/ustadz/attendance', icon: CalendarDaysIcon },
  { name: 'Progress Hafalan', href: '/ustadz/hafalan', icon: BookOpenIcon },
  { name: 'Komunikasi', href: '/ustadz/messages', icon: ChatBubbleLeftRightIcon },
  { name: 'Laporan', href: '/ustadz/reports', icon: DocumentTextIcon },
]

export default function UstadzLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-emerald-900">RTQ Ustadz</h1>
                  <p className="text-xs text-emerald-600">Panel Ustadz</p>
                </div>
              </div>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {ustadzNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                        : 'text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900'
                    }`}
                  >
                    <item.icon className={`mr-4 h-6 w-6 ${isActive ? 'text-white' : 'text-emerald-500'}`} />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="p-4 border-t border-emerald-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AS</span>
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-900">Ustadz Ahmad</p>
                <p className="text-xs text-emerald-600">Pengajar RTQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-white border-r border-emerald-200 shadow-lg">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-emerald-900">RTQ Ustadz</h1>
                    <p className="text-sm text-emerald-600">Panel Pengajar</p>
                  </div>
                </div>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {ustadzNavigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg transform scale-105'
                          : 'text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900 hover:scale-102'
                      }`}
                    >
                      <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-emerald-500'}`} />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
            
            {/* User Profile */}
            <div className="p-4 border-t border-emerald-200 bg-emerald-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AS</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-900">Ustadz Ahmad Subhan</p>
                  <p className="text-xs text-emerald-600">Pengajar Al-Qur&apos;an</p>
                  <p className="text-xs text-emerald-500">Kelas: Al-Baqarah, Ali Imran</p>
                </div>
              </div>
              <div className="mt-3">
                <Link href="/auth/login" className="text-xs text-emerald-600 hover:text-emerald-800 transition-colors">
                  Keluar →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white border-b border-emerald-200">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-emerald-500 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  )
}

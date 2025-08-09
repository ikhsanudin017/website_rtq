'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  UserIcon, 
  CalendarDaysIcon, 
  CurrencyDollarIcon,
  BellIcon
} from '@heroicons/react/24/outline'

const parentNavigation = [
  { name: 'Beranda', href: '/parent', icon: HomeIcon },
  { name: 'Profil Santri', href: '/parent/profile', icon: UserIcon },
  { name: 'Presensi', href: '/parent/attendance', icon: CalendarDaysIcon },
  { name: 'Pembayaran', href: '/parent/payments', icon: CurrencyDollarIcon },
  { name: 'Notifikasi', href: '/parent/notifications', icon: BellIcon },
]

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">RTQ Ibnu Mas&apos;ud</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Portal Orang Tua</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="space-y-1">
              {parentNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

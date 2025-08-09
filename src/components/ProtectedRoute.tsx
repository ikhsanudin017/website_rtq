'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: string[]
  redirectTo?: string
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles,
  redirectTo 
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push('/login')
        return
      }

      if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect to their appropriate dashboard
        const defaultRedirects = {
          admin: '/admin',
          ustadz: '/ustadz', 
          parent: '/parent'
        }
        
        const redirect = redirectTo || defaultRedirects[user.role as keyof typeof defaultRedirects] || '/login'
        router.push(redirect)
        return
      }
    }
  }, [user, isLoading, allowedRoles, redirectTo, router])

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-600 font-medium">Memuat...</p>
        </div>
      </div>
    )
  }

  // Don't render content if user is not authenticated or doesn't have permission
  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return null
  }

  return <>{children}</>
}

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  username: string
  role: string
  name: string
  childName?: string
  loginTime: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in on component mount
    checkAuthStatus()
  }, [])

  const checkAuthStatus = () => {
    try {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('rtq_user')
        if (storedUser) {
          const userData = JSON.parse(storedUser)
          setUser(userData)
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const login = (userData: User) => {
    setUser(userData)
    if (typeof window !== 'undefined') {
      localStorage.setItem('rtq_user', JSON.stringify(userData))
    }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('rtq_user')
    }
    router.push('/login')
  }

  const requireAuth = (allowedRoles?: string[]) => {
    if (!user) {
      router.push('/login')
      return false
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      // Redirect to unauthorized page or their dashboard
      switch (user.role) {
        case 'admin':
          router.push('/admin')
          break
        case 'ustadz':
          router.push('/ustadz')
          break
        case 'parent':
          router.push('/parent')
          break
        default:
          router.push('/login')
      }
      return false
    }

    return true
  }

  const isRole = (role: string) => {
    return user?.role === role
  }

  return {
    user,
    isLoading,
    login,
    logout,
    requireAuth,
    isRole,
    isAuthenticated: !!user
  }
}

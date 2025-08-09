'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpenIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'admin'
  })

  // Admin utama saja - user lain akan ditambah via User Management
  const mockUsers = {
    'admin': { password: 'admin123', role: 'admin', name: 'Administrator RTQ' }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    console.log('=== LOGIN ATTEMPT ===')
    console.log('Username:', formData.username)
    console.log('Password:', formData.password)

    // Simple direct validation
    if (formData.username === 'admin' && formData.password === 'admin123') {
      console.log('✅ Credentials valid!')
      
      // Save user session
      const userData = {
        username: 'admin',
        role: 'admin',
        name: 'Administrator RTQ',
        loginTime: new Date().toISOString()
      }
      
      console.log('💾 Saving user data:', userData)
      localStorage.setItem('rtq_user', JSON.stringify(userData))
      
      console.log('📄 Checking localStorage:')
      console.log(localStorage.getItem('rtq_user'))
      
      console.log('🔄 Redirecting to /admin...')
      
      // Force reload to admin page
      window.location.href = '/admin'
    } else {
      console.log('❌ Invalid credentials')
      setError('Username atau password salah!')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setError('') // Clear error when user types
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Kembali ke Beranda</span>
          </Link>
          
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
            <div className="relative w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl border-4 border-white/50 hover:scale-110 transition-transform duration-500 flex items-center justify-center">
              <BookOpenIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-blue-900 mb-2 bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
            Masuk ke Portal
          </h2>
          <p className="text-blue-700 text-lg">
            RTQ Ibnu Mas&apos;ud Prambanan
          </p>
        </div>

        {/* Login Form */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-blue-50/50"></div>
          <CardHeader className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-center text-2xl font-bold flex items-center justify-center space-x-2">
              <BookOpenIcon className="w-6 h-6" />
              <span>Login Portal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-semibold text-blue-900">
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Masukkan username"
                  className="w-full h-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl text-blue-900 placeholder-blue-400 bg-white/70 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-blue-900">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Masukkan password"
                    className="w-full h-12 pr-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl text-blue-900 placeholder-blue-400 bg-white/70 backdrop-blur-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-400 hover:text-blue-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-semibold text-blue-900">
                  Login Sebagai
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full h-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl text-blue-900 bg-white/70 backdrop-blur-sm px-4"
                >
                  <option value="admin">Administrator</option>
                  <option value="ustadz">Ustadz/Pengajar</option>
                  <option value="parent">Orang Tua</option>
                </select>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-900 font-medium">
                    Ingat saya
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                    Lupa password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <BookOpenIcon className="w-5 h-5" />
                    <span>Masuk Portal</span>
                  </span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-blue-600 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <p className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span>Butuh bantuan? Hubungi</span>
            <a href="https://wa.me/6281234567890" className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
              Admin WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Cog6ToothIcon,
  UserIcon,
  ShieldCheckIcon,
  BellIcon,
  GlobeAltIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  KeyIcon,
  PhotoIcon,
  DocumentTextIcon,
  CloudIcon,
  PaintBrushIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

// Mock data untuk pengaturan
const settingsData = {
  institution: {
    name: 'RTQ Ibnu Mas\'ud',
    address: 'Jl. Raya Bogor No. 123, Jakarta Timur',
    phone: '+62 21 8765 4321',
    email: 'info@rtqibnumasud.com',
    website: 'www.rtqibnumasud.com',
    logo: '/LOGO RTQ.png'
  },
  academic: {
    currentYear: '2024/2025',
    semester: 'Ganjil',
    targetHafalan: 30,
    minimumAttendance: 80,
    gradeSystem: 'A-F'
  },
  payment: {
    monthlyFee: 300000,
    registrationFee: 500000,
    examFee: 150000,
    paymentMethods: ['Bank Transfer', 'E-Wallet', 'Cash'],
    paymentDeadline: 10
  },
  notification: {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    paymentReminders: true,
    attendanceAlerts: true
  },
  system: {
    theme: 'blue',
    language: 'id',
    timezone: 'Asia/Jakarta',
    dateFormat: 'dd/mm/yyyy',
    autoBackup: true,
    backupFrequency: 'daily'
  }
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('institution')
  const [settings, setSettings] = useState(settingsData)
  const [isEditing, setIsEditing] = useState(false)

  const tabs = [
    { id: 'institution', name: 'Profil Lembaga', icon: AcademicCapIcon },
    { id: 'academic', name: 'Akademik', icon: CalendarDaysIcon },
    { id: 'payment', name: 'Pembayaran', icon: CurrencyDollarIcon },
    { id: 'notification', name: 'Notifikasi', icon: BellIcon },
    { id: 'system', name: 'Sistem', icon: Cog6ToothIcon },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Simulate saving settings
    console.log('Settings saved:', settings)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 -m-6 p-6">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 opacity-5 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600">
              <path d="M50 10 L60 30 L80 25 L70 45 L90 50 L70 55 L80 75 L60 70 L50 90 L40 70 L20 75 L30 55 L10 50 L30 45 L20 25 L40 30 Z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-600">
              <path d="M50 0 L65 25 L90 20 L75 45 L100 50 L75 55 L90 80 L65 75 L50 100 L35 75 L10 80 L25 55 L0 50 L25 45 L10 20 L35 25 Z"/>
            </svg>
          </div>
        </div>

        <div className="relative space-y-6">
          {/* Header */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent flex items-center">
                    <Cog6ToothIcon className="w-8 h-8 mr-3 text-emerald-600" />
                    Pengaturan Sistem
                  </CardTitle>
                  <p className="text-blue-700 mt-2">Kelola konfigurasi dan pengaturan RTQ Ibnu Mas&apos;ud</p>
                </div>
                <div className="flex items-center space-x-3">
                  {isEditing ? (
                    <>
                      <Button variant="outline" onClick={() => setIsEditing(false)} className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        Batal
                      </Button>
                      <Button onClick={handleSave} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                        Simpan Perubahan
                      </Button>
                    </>
                  ) : (
                    <Button onClick={() => setIsEditing(true)} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <KeyIcon className="w-4 h-4 mr-2" />
                      Edit Pengaturan
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Settings Navigation */}
            <Card className="lg:col-span-1 bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-900">Menu Pengaturan</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                          : 'text-blue-700 hover:bg-blue-50 hover:text-blue-900'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Settings Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Institution Settings */}
              {activeTab === 'institution' && (
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                      <AcademicCapIcon className="w-6 h-6 mr-2 text-emerald-600" />
                      Profil Lembaga
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Nama Lembaga</label>
                        <Input
                          value={settings.institution.name}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Website</label>
                        <Input
                          value={settings.institution.website}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">Alamat</label>
                      <Input
                        value={settings.institution.address}
                        disabled={!isEditing}
                        className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Nomor Telepon</label>
                        <Input
                          value={settings.institution.phone}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Email</label>
                        <Input
                          value={settings.institution.email}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">Logo Lembaga</label>
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                          <PhotoIcon className="w-8 h-8 text-blue-600" />
                        </div>
                        {isEditing && (
                          <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                            Ganti Logo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Academic Settings */}
              {activeTab === 'academic' && (
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                      <CalendarDaysIcon className="w-6 h-6 mr-2 text-emerald-600" />
                      Pengaturan Akademik
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Tahun Ajaran</label>
                        <Input
                          value={settings.academic.currentYear}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Semester</label>
                        <select
                          value={settings.academic.semester}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900 disabled:bg-gray-50"
                        >
                          <option value="Ganjil">Ganjil</option>
                          <option value="Genap">Genap</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Target Hafalan (Juz)</label>
                        <Input
                          type="number"
                          value={settings.academic.targetHafalan}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Minimum Kehadiran (%)</label>
                        <Input
                          type="number"
                          value={settings.academic.minimumAttendance}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">Sistem Penilaian</label>
                      <select
                        value={settings.academic.gradeSystem}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900 disabled:bg-gray-50"
                      >
                        <option value="A-F">A, B, C, D, E, F</option>
                        <option value="1-10">1 - 10</option>
                        <option value="1-100">1 - 100</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Payment Settings */}
              {activeTab === 'payment' && (
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                      <CurrencyDollarIcon className="w-6 h-6 mr-2 text-emerald-600" />
                      Pengaturan Pembayaran
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">SPP Bulanan (Rp)</label>
                        <Input
                          type="number"
                          value={settings.payment.monthlyFee}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Biaya Pendaftaran (Rp)</label>
                        <Input
                          type="number"
                          value={settings.payment.registrationFee}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Biaya Ujian (Rp)</label>
                        <Input
                          type="number"
                          value={settings.payment.examFee}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Batas Waktu Pembayaran (Hari)</label>
                        <Input
                          type="number"
                          value={settings.payment.paymentDeadline}
                          disabled={!isEditing}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-3">Metode Pembayaran</label>
                      <div className="flex flex-wrap gap-2">
                        {settings.payment.paymentMethods.map((method) => (
                          <Badge key={method} variant="secondary" className="bg-blue-100 text-blue-800">
                            {method}
                          </Badge>
                        ))}
                        {isEditing && (
                          <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                            + Tambah Metode
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Notification Settings */}
              {activeTab === 'notification' && (
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                      <BellIcon className="w-6 h-6 mr-2 text-emerald-600" />
                      Pengaturan Notifikasi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-900">Notifikasi Email</p>
                            <p className="text-sm text-blue-600">Kirim notifikasi melalui email</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.notification.emailNotifications}
                          disabled={!isEditing}
                          className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <DevicePhoneMobileIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-900">Notifikasi SMS</p>
                            <p className="text-sm text-blue-600">Kirim notifikasi melalui SMS</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.notification.smsNotifications}
                          disabled={!isEditing}
                          className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <BellIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-900">Push Notifications</p>
                            <p className="text-sm text-blue-600">Notifikasi langsung di aplikasi</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.notification.pushNotifications}
                          disabled={!isEditing}
                          className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <CurrencyDollarIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-900">Reminder Pembayaran</p>
                            <p className="text-sm text-blue-600">Pengingat otomatis untuk pembayaran</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.notification.paymentReminders}
                          disabled={!isEditing}
                          className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <CalendarDaysIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-900">Alert Kehadiran</p>
                            <p className="text-sm text-blue-600">Notifikasi untuk kehadiran santri</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.notification.attendanceAlerts}
                          disabled={!isEditing}
                          className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* System Settings */}
              {activeTab === 'system' && (
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                      <Cog6ToothIcon className="w-6 h-6 mr-2 text-emerald-600" />
                      Pengaturan Sistem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Tema</label>
                        <select
                          value={settings.system.theme}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900 disabled:bg-gray-50"
                        >
                          <option value="blue">Biru (Default)</option>
                          <option value="green">Hijau</option>
                          <option value="purple">Ungu</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Bahasa</label>
                        <select
                          value={settings.system.language}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900 disabled:bg-gray-50"
                        >
                          <option value="id">Bahasa Indonesia</option>
                          <option value="en">English</option>
                          <option value="ar">العربية</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Zona Waktu</label>
                        <select
                          value={settings.system.timezone}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900 disabled:bg-gray-50"
                        >
                          <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
                          <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
                          <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-900 mb-2">Format Tanggal</label>
                        <select
                          value={settings.system.dateFormat}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900 disabled:bg-gray-50"
                        >
                          <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                          <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                          <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <CircleStackIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-900">Auto Backup</p>
                            <p className="text-sm text-blue-600">Backup otomatis database sistem</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.system.autoBackup}
                          disabled={!isEditing}
                          className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      
                      {settings.system.autoBackup && (
                        <div>
                          <label className="block text-sm font-medium text-blue-900 mb-2">Frekuensi Backup</label>
                          <select
                            value={settings.system.backupFrequency}
                            disabled={!isEditing}
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900 disabled:bg-gray-50"
                          >
                            <option value="daily">Harian</option>
                            <option value="weekly">Mingguan</option>
                            <option value="monthly">Bulanan</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

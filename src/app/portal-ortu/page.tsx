'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  UserIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  StarIcon,
  TrophyIcon,
  HeartIcon,
  BellIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

// Mock data untuk anak
const childData = {
  id: 'RTQ001',
  name: 'Ahmad Rizky Pratama',
  class: 'Tahfizh Al-Baqarah',
  photo: '/student-photo.jpg',
  enrollmentDate: '2023-08-01',
  hafalan: {
    current: 450, // ayat
    target: 600,
    percentage: 75,
    lastUpdate: '2024-01-15',
    recentProgress: [
      { date: '2024-01-15', surah: 'Al-Baqarah', ayat: '285-286', status: 'completed' },
      { date: '2024-01-14', surah: 'Al-Baqarah', ayat: '280-284', status: 'completed' },
      { date: '2024-01-13', surah: 'Al-Baqarah', ayat: '275-279', status: 'review' },
    ]
  },
  attendance: {
    thisMonth: 18,
    total: 20,
    percentage: 90,
    lastAttendance: '2024-01-15',
    recentAttendance: [
      { date: '2024-01-15', status: 'present', time: '07:00' },
      { date: '2024-01-14', status: 'present', time: '07:05' },
      { date: '2024-01-13', status: 'present', time: '06:58' },
      { date: '2024-01-12', status: 'absent', reason: 'Sakit' },
      { date: '2024-01-11', status: 'present', time: '07:02' },
    ]
  },
  payments: {
    thisMonth: {
      amount: 300000,
      status: 'paid',
      paymentDate: '2024-01-05',
      method: 'Bank Transfer'
    },
    nextDue: {
      amount: 300000,
      dueDate: '2024-02-01',
      type: 'SPP Februari 2024'
    },
    history: [
      { month: 'Januari 2024', amount: 300000, status: 'paid', date: '2024-01-05' },
      { month: 'Desember 2023', amount: 300000, status: 'paid', date: '2023-12-03' },
      { month: 'November 2023', amount: 300000, status: 'paid', date: '2023-11-02' },
    ]
  },
  achievements: [
    { title: 'Hafal 15 Juz', date: '2024-01-10', icon: 'trophy' },
    { title: 'Kehadiran 100% Desember', date: '2023-12-31', icon: 'star' },
    { title: 'Tahsin Terbaik', date: '2023-11-15', icon: 'heart' },
  ],
  schedule: [
    { day: 'Senin', time: '07:00 - 11:00', activity: 'Tahfizh & Muraja\'ah' },
    { day: 'Selasa', time: '07:00 - 11:00', activity: 'Tahfizh & Tahsin' },
    { day: 'Rabu', time: '07:00 - 11:00', activity: 'Tahfizh & Tafsir' },
    { day: 'Kamis', time: '07:00 - 11:00', activity: 'Tahfizh & Hadits' },
    { day: 'Jumat', time: '07:00 - 11:00', activity: 'Tahfizh & Fiqh' },
    { day: 'Sabtu', time: '07:00 - 11:00', activity: 'Muraja\'ah & Evaluasi' },
  ]
};

const notifications = [
  {
    id: 1,
    type: 'achievement',
    title: 'Pencapaian Baru!',
    message: 'Ahmad telah menyelesaikan hafalan Juz 15',
    date: '2024-01-15',
    read: false
  },
  {
    id: 2,
    type: 'payment',
    title: 'Pembayaran Berhasil',
    message: 'SPP Januari 2024 telah diterima',
    date: '2024-01-05',
    read: true
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Pengingat Pembayaran',
    message: 'SPP Februari 2024 jatuh tempo 1 Feb 2024',
    date: '2024-01-15',
    read: false
  }
];

export default function ParentPortalPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const getAttendanceStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Hadir</Badge>;
      case 'absent':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Tidak Hadir</Badge>;
      case 'late':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Terlambat</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Lunas</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Terlambat</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-blue-600/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-indigo-400/30 rounded-full animate-pulse"></div>
        
        {/* Islamic Pattern Decorations */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-5 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600">
            <path d="M50 0 L60 20 L80 15 L70 35 L90 40 L70 45 L80 65 L60 60 L50 80 L40 60 L20 65 L30 45 L10 40 L30 35 L20 15 L40 20 Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-24 h-24 opacity-5 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-indigo-600">
            <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L65 45 L70 60 L55 55 L50 70 L45 55 L30 60 L35 45 L20 40 L35 35 L30 20 L45 25 Z"/>
          </svg>
        </div>
      </div>

      <div className="relative p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50">
                  <UserIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 bg-clip-text text-transparent animate-gradient">
                  Portal Orang Tua
                </h1>
                <p className="text-blue-700 mt-2 text-lg">Pantau perkembangan putra-putri Anda</p>
                <p className="text-blue-600 text-sm">Santri: {childData.name} ({childData.id})</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 relative">
                <BellIcon className="w-4 h-4 mr-2" />
                Notifikasi
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">2</span>
                </div>
              </Button>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Student Profile Card */}
        <Card className="mb-8 border-0 shadow-2xl bg-white/90 backdrop-blur-sm animate-fade-in-up-delay-1">
          <CardContent className="p-8">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-2xl blur-xl scale-110 animate-pulse"></div>
                <div className="relative w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/50">
                  <UserIcon className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">{childData.name}</h2>
                <p className="text-blue-700 text-lg mb-4">{childData.class}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">{childData.hafalan.percentage}%</div>
                    <div className="text-green-600 text-sm">Progress Hafalan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">{childData.attendance.percentage}%</div>
                    <div className="text-blue-600 text-sm">Kehadiran Bulan Ini</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">{childData.achievements.length}</div>
                    <div className="text-purple-600 text-sm">Pencapaian</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="mb-8 animate-fade-in-up-delay-2">
          <div className="flex space-x-2 bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg">
            {[
              { id: 'overview', name: 'Ringkasan', icon: ChartBarIcon },
              { id: 'hafalan', name: 'Hafalan', icon: BookOpenIcon },
              { id: 'attendance', name: 'Presensi', icon: ClipboardDocumentCheckIcon },
              { id: 'payments', name: 'Pembayaran', icon: CurrencyDollarIcon },
              { id: 'schedule', name: 'Jadwal', icon: CalendarIcon },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-blue-700 hover:bg-blue-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="animate-fade-in-up-delay-3">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Stats */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50 hover:scale-105 transform">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-900">Hafalan Terkini</CardTitle>
                  <BookOpenIcon className="h-5 w-5 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-700">{childData.hafalan.current} Ayat</div>
                  <Progress value={childData.hafalan.percentage} className="mt-2" />
                  <p className="text-xs text-green-600 mt-2">Target: {childData.hafalan.target} ayat</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-900">Kehadiran</CardTitle>
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-700">{childData.attendance.thisMonth}/{childData.attendance.total}</div>
                  <Progress value={childData.attendance.percentage} className="mt-2" />
                  <p className="text-xs text-blue-600 mt-2">Bulan ini ({childData.attendance.percentage}%)</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 hover:scale-105 transform">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-900">Pencapaian</CardTitle>
                  <TrophyIcon className="h-5 w-5 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-700">{childData.achievements.length}</div>
                  <p className="text-xs text-purple-600 mt-2">Total prestasi</p>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card className="md:col-span-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 flex items-center">
                    <TrophyIcon className="w-5 h-5 mr-2" />
                    Pencapaian Terbaru
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {childData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                          {achievement.icon === 'trophy' && <TrophyIcon className="w-5 h-5 text-white" />}
                          {achievement.icon === 'star' && <StarIcon className="w-5 h-5 text-white" />}
                          {achievement.icon === 'heart' && <HeartIcon className="w-5 h-5 text-white" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-yellow-900">{achievement.title}</div>
                          <div className="text-sm text-yellow-700">{achievement.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 flex items-center">
                    <BellIcon className="w-5 h-5 mr-2" />
                    Notifikasi Terbaru
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.slice(0, 3).map((notification) => (
                      <div key={notification.id} className={`p-3 rounded-lg border ${notification.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'}`}>
                        <div className="font-medium text-blue-900 text-sm">{notification.title}</div>
                        <div className="text-blue-700 text-xs mt-1">{notification.message}</div>
                        <div className="text-blue-600 text-xs mt-1">{notification.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'hafalan' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 flex items-center">
                    <BookOpenIcon className="w-5 h-5 mr-2" />
                    Progress Hafalan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-700 mb-2">{childData.hafalan.percentage}%</div>
                    <Progress value={childData.hafalan.percentage} className="mb-4" />
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-700">{childData.hafalan.current}</div>
                        <div className="text-green-600 text-sm">Ayat Hafal</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-700">{childData.hafalan.target}</div>
                        <div className="text-blue-600 text-sm">Target Ayat</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Progress Terbaru</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {childData.hafalan.recentProgress.map((progress, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                          progress.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-yellow-500 to-orange-600'
                        }`}>
                          {progress.status === 'completed' ? 
                            <CheckCircleIcon className="w-5 h-5 text-white" /> : 
                            <ClockIcon className="w-5 h-5 text-white" />
                          }
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-blue-900">{progress.surah}</div>
                          <div className="text-sm text-blue-700">Ayat {progress.ayat}</div>
                          <div className="text-xs text-blue-600">{progress.date}</div>
                        </div>
                        <Badge className={progress.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {progress.status === 'completed' ? 'Selesai' : 'Review'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'attendance' && (
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900 flex items-center">
                  <ClipboardDocumentCheckIcon className="w-5 h-5 mr-2" />
                  Riwayat Kehadiran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-700">{childData.attendance.thisMonth}</div>
                    <div className="text-green-600 text-sm">Hari Hadir</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700">{childData.attendance.total}</div>
                    <div className="text-blue-600 text-sm">Total Hari</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-700">{childData.attendance.percentage}%</div>
                    <div className="text-purple-600 text-sm">Persentase</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {childData.attendance.recentAttendance.map((attendance, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                          attendance.status === 'present' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-pink-600'
                        }`}>
                          {attendance.status === 'present' ? 
                            <CheckCircleIcon className="w-5 h-5 text-white" /> : 
                            <ExclamationTriangleIcon className="w-5 h-5 text-white" />
                          }
                        </div>
                        <div>
                          <div className="font-semibold text-blue-900">{attendance.date}</div>
                          {attendance.time && <div className="text-sm text-blue-700">Waktu: {attendance.time}</div>}
                          {attendance.reason && <div className="text-sm text-red-600">Alasan: {attendance.reason}</div>}
                        </div>
                      </div>
                      {getAttendanceStatusBadge(attendance.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'payments' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 flex items-center">
                    <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                    Status Pembayaran Terkini
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-green-900">SPP Januari 2024</div>
                          <div className="text-green-700">Rp {childData.payments.thisMonth.amount.toLocaleString('id-ID')}</div>
                          <div className="text-sm text-green-600">Dibayar: {childData.payments.thisMonth.paymentDate}</div>
                        </div>
                        {getPaymentStatusBadge(childData.payments.thisMonth.status)}
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-yellow-900">{childData.payments.nextDue.type}</div>
                          <div className="text-yellow-700">Rp {childData.payments.nextDue.amount.toLocaleString('id-ID')}</div>
                          <div className="text-sm text-yellow-600">Jatuh tempo: {childData.payments.nextDue.dueDate}</div>
                        </div>
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                          Bayar Sekarang
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Riwayat Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {childData.payments.history.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                        <div>
                          <div className="font-semibold text-blue-900">{payment.month}</div>
                          <div className="text-blue-700">Rp {payment.amount.toLocaleString('id-ID')}</div>
                          <div className="text-sm text-blue-600">{payment.date}</div>
                        </div>
                        {getPaymentStatusBadge(payment.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'schedule' && (
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900 flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Jadwal Mingguan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {childData.schedule.map((schedule, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="text-center">
                        <div className="font-bold text-blue-900 text-lg mb-2">{schedule.day}</div>
                        <div className="text-blue-700 font-medium mb-2">{schedule.time}</div>
                        <div className="text-blue-600 text-sm">{schedule.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

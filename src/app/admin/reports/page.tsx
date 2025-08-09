'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import {
  ChartBarIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  DocumentChartBarIcon,
  PresentationChartLineIcon,
  ClockIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

// Mock data untuk laporan
const reportData = {
  monthlyAttendance: [
    { month: 'Jan', percentage: 92 },
    { month: 'Feb', percentage: 88 },
    { month: 'Mar', percentage: 95 },
    { month: 'Apr', percentage: 90 },
    { month: 'Mei', percentage: 94 },
    { month: 'Jun', percentage: 87 }
  ],
  paymentStats: {
    totalIncome: 45200000,
    monthlyIncome: 7800000,
    pendingPayments: 15,
    overduePayments: 3,
    paymentRate: 94
  },
  studentProgress: {
    totalStudents: 156,
    activeStudents: 148,
    averageHafalan: 8.5,
    completedTargets: 23,
    progressRate: 78
  },
  classPerformance: [
    { class: 'Al-Baqarah', students: 25, avgHafalan: 12.5, attendance: 95 },
    { class: 'Ali Imran', students: 28, avgHafalan: 10.2, attendance: 92 },
    { class: 'An-Nisa', students: 22, avgHafalan: 8.8, attendance: 89 },
    { class: 'Al-Maidah', students: 26, avgHafalan: 7.3, attendance: 93 },
    { class: 'Al-Anam', students: 24, avgHafalan: 6.1, attendance: 88 },
    { class: 'Al-Anfal', students: 21, avgHafalan: 4.8, attendance: 91 }
  ]
}

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')
  const [selectedYear, setSelectedYear] = useState('2024')
  const [reportType, setReportType] = useState('all')

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
                    <ChartBarIcon className="w-8 h-8 mr-3 text-emerald-600" />
                    Laporan & Analitik
                  </CardTitle>
                  <p className="text-blue-700 mt-2">Dashboard analitik dan laporan RTQ Ibnu Mas&apos;ud</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white">
                    <PrinterIcon className="w-4 h-4 mr-2" />
                    Print
                  </Button>
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Filter Controls */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-blue-900 mb-2">Periode Laporan</label>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900"
                  >
                    <option value="daily">Harian</option>
                    <option value="weekly">Mingguan</option>
                    <option value="monthly">Bulanan</option>
                    <option value="yearly">Tahunan</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-blue-900 mb-2">Tahun</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-blue-900 mb-2">Jenis Laporan</label>
                  <select
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white text-blue-900"
                  >
                    <option value="all">Semua Laporan</option>
                    <option value="attendance">Presensi</option>
                    <option value="payment">Keuangan</option>
                    <option value="academic">Akademik</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Total Santri</p>
                    <p className="text-3xl font-bold">{reportData.studentProgress.totalStudents}</p>
                    <div className="flex items-center mt-2">
                      <ArrowTrendingUpIcon className="w-4 h-4 text-green-300 mr-1" />
                      <span className="text-sm text-green-200">+8 bulan ini</span>
                    </div>
                  </div>
                  <UserGroupIcon className="w-12 h-12 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Pendapatan Bulanan</p>
                    <p className="text-3xl font-bold">Rp {(reportData.paymentStats.monthlyIncome / 1000000).toFixed(1)}M</p>
                    <div className="flex items-center mt-2">
                      <ArrowTrendingUpIcon className="w-4 h-4 text-green-300 mr-1" />
                      <span className="text-sm text-green-200">+12% dari bulan lalu</span>
                    </div>
                  </div>
                  <CurrencyDollarIcon className="w-12 h-12 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Rata-rata Hafalan</p>
                    <p className="text-3xl font-bold">{reportData.studentProgress.averageHafalan} Juz</p>
                    <div className="flex items-center mt-2">
                      <ArrowTrendingUpIcon className="w-4 h-4 text-green-300 mr-1" />
                      <span className="text-sm text-green-200">+0.8 dari target</span>
                    </div>
                  </div>
                  <BookOpenIcon className="w-12 h-12 text-purple-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Tingkat Kehadiran</p>
                    <p className="text-3xl font-bold">91%</p>
                    <div className="flex items-center mt-2">
                      <ArrowTrendingDownIcon className="w-4 h-4 text-red-300 mr-1" />
                      <span className="text-sm text-red-200">-2% dari target</span>
                    </div>
                  </div>
                  <CalendarDaysIcon className="w-12 h-12 text-orange-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Attendance Chart */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                  <PresentationChartLineIcon className="w-6 h-6 mr-2 text-emerald-600" />
                  Trend Kehadiran Bulanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportData.monthlyAttendance.map((data, index) => (
                    <div key={data.month} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium text-blue-900">{data.month}</div>
                      <div className="flex-1">
                        <Progress value={data.percentage} className="h-3" />
                      </div>
                      <div className="w-12 text-sm font-bold text-blue-900">{data.percentage}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Overview */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                  <CurrencyDollarIcon className="w-6 h-6 mr-2 text-emerald-600" />
                  Overview Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p className="text-sm text-green-600">Total Pendapatan</p>
                      <p className="text-2xl font-bold text-green-800">
                        Rp {(reportData.paymentStats.totalIncome / 1000000).toFixed(1)}M
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-600">Tingkat Pembayaran</p>
                      <p className="text-xl font-bold text-green-800">{reportData.paymentStats.paymentRate}%</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-600">Pending</p>
                      <p className="text-xl font-bold text-yellow-800">{reportData.paymentStats.pendingPayments}</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-sm text-red-600">Terlambat</p>
                      <p className="text-xl font-bold text-red-800">{reportData.paymentStats.overduePayments}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Class Performance Table */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                <AcademicCapIcon className="w-6 h-6 mr-2 text-emerald-600" />
                Performa Kelas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Kelas</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Jumlah Santri</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Rata-rata Hafalan</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Tingkat Kehadiran</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.classPerformance.map((classData, index) => (
                      <tr key={classData.class} className={`border-b border-blue-100 hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white/50' : 'bg-blue-25/50'}`}>
                        <td className="py-4 px-4">
                          <div className="font-semibold text-blue-900">{classData.class}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <UserGroupIcon className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-blue-900">{classData.students}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <BookOpenIcon className="w-4 h-4 text-emerald-600" />
                            <span className="font-bold text-emerald-700">{classData.avgHafalan} Juz</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="flex-1">
                              <Progress value={classData.attendance} className="h-2" />
                            </div>
                            <span className="font-bold text-blue-900 w-12">{classData.attendance}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            classData.attendance >= 95 ? 'bg-green-100 text-green-800' :
                            classData.attendance >= 90 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {classData.attendance >= 95 ? 'Excellent' :
                             classData.attendance >= 90 ? 'Good' : 'Needs Improvement'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Quick Report Actions */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">Laporan Cepat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-20 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white flex flex-col items-center justify-center space-y-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <DocumentChartBarIcon className="w-6 h-6" />
                  <span className="text-sm font-medium">Laporan Presensi Bulanan</span>
                </Button>
                <Button className="h-20 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white flex flex-col items-center justify-center space-y-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CurrencyDollarIcon className="w-6 h-6" />
                  <span className="text-sm font-medium">Laporan Keuangan</span>
                </Button>
                <Button className="h-20 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white flex flex-col items-center justify-center space-y-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <AcademicCapIcon className="w-6 h-6" />
                  <span className="text-sm font-medium">Laporan Prestasi Santri</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}

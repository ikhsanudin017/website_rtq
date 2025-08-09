'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CalendarIcon,
  BanknotesIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  DocumentTextIcon,
  UserIcon,
  PrinterIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Mock data untuk pembayaran
const mockPayments = [
  {
    id: 1,
    studentName: 'Ahmad Rizky Pratama',
    studentId: 'RTQ001',
    amount: 300000,
    type: 'SPP Bulanan',
    month: 'Januari 2024',
    status: 'paid',
    paymentDate: '2024-01-05',
    paymentMethod: 'Bank Transfer',
    invoiceNumber: 'INV-2024-001'
  },
  {
    id: 2,
    studentName: 'Fatimah Azzahra',
    studentId: 'RTQ002',
    amount: 300000,
    type: 'SPP Bulanan',
    month: 'Januari 2024',
    status: 'pending',
    dueDate: '2024-01-15',
    invoiceNumber: 'INV-2024-002'
  },
  {
    id: 3,
    studentName: 'Muhammad Fauzan',
    studentId: 'RTQ003',
    amount: 150000,
    type: 'Biaya Ujian',
    month: 'Januari 2024',
    status: 'overdue',
    dueDate: '2024-01-10',
    invoiceNumber: 'INV-2024-003'
  },
  {
    id: 4,
    studentName: 'Aisyah Nur Kamila',
    studentId: 'RTQ004',
    amount: 300000,
    type: 'SPP Bulanan',
    month: 'Januari 2024',
    status: 'paid',
    paymentDate: '2024-01-03',
    paymentMethod: 'E-Wallet',
    invoiceNumber: 'INV-2024-004'
  },
  {
    id: 5,
    studentName: 'Abdullah Malik',
    studentId: 'RTQ005',
    amount: 500000,
    type: 'Biaya Pendaftaran',
    month: 'Januari 2024',
    status: 'pending',
    dueDate: '2024-01-20',
    invoiceNumber: 'INV-2024-005'
  }
];

const paymentStats = {
  totalIncome: 15750000,
  thisMonth: 3250000,
  pending: 1150000,
  overdue: 450000
};

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredPayments = mockPayments.filter(payment => {
    const matchesSearch = payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    const matchesType = typeFilter === 'all' || payment.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-yellow-600" />;
      case 'overdue':
        return <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />;
      default:
        return null;
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
        <div className="absolute top-20 right-20 w-32 h-32 opacity-5 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600">
            <path d="M50 0 L60 20 L80 15 L70 35 L90 40 L70 45 L80 65 L60 60 L50 80 L40 60 L20 65 L30 45 L10 40 L30 35 L20 15 L40 20 Z"/>
          </svg>
        </div>
      </div>

      <div className="relative p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 bg-clip-text text-transparent animate-gradient">
                Manajemen Pembayaran
              </h1>
              <p className="text-blue-700 mt-2 text-lg">Kelola pembayaran SPP dan biaya lainnya</p>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/admin">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  Kembali ke Dashboard
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <PlusIcon className="w-4 h-4 mr-2" />
                Tambah Pembayaran
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up-delay-1">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-900">Total Pendapatan</CardTitle>
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                <BanknotesIcon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700 animate-pulse">
                Rp {paymentStats.totalIncome.toLocaleString('id-ID')}
              </div>
              <p className="text-xs text-green-600 mt-1">Total keseluruhan</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-900">Pendapatan Bulan Ini</CardTitle>
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                <CurrencyDollarIcon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700 animate-pulse">
                Rp {paymentStats.thisMonth.toLocaleString('id-ID')}
              </div>
              <p className="text-xs text-blue-600 mt-1">Januari 2024</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-900">Pembayaran Pending</CardTitle>
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                <ClockIcon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-700 animate-pulse">
                Rp {paymentStats.pending.toLocaleString('id-ID')}
              </div>
              <p className="text-xs text-yellow-600 mt-1">Menunggu pembayaran</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-900">Pembayaran Terlambat</CardTitle>
              <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                <ExclamationTriangleIcon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-700 animate-pulse">
                Rp {paymentStats.overdue.toLocaleString('id-ID')}
              </div>
              <p className="text-xs text-red-600 mt-1">Perlu perhatian</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in-up-delay-2">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900 flex items-center">
              <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
              Filter & Pencarian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Cari nama santri, ID, atau nomor invoice..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-blue-200 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white"
              >
                <option value="all">Semua Status</option>
                <option value="paid">Lunas</option>
                <option value="pending">Pending</option>
                <option value="overdue">Terlambat</option>
              </select>
              
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-blue-200 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white"
              >
                <option value="all">Semua Jenis</option>
                <option value="SPP Bulanan">SPP Bulanan</option>
                <option value="Biaya Ujian">Biaya Ujian</option>
                <option value="Biaya Pendaftaran">Biaya Pendaftaran</option>
              </select>

              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payments Table */}
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm animate-fade-in-up-delay-3">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900 flex items-center">
              <DocumentTextIcon className="w-5 h-5 mr-2" />
              Daftar Pembayaran ({filteredPayments.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-100">
                    <th className="text-left py-4 px-2 text-blue-900 font-semibold">Santri</th>
                    <th className="text-left py-4 px-2 text-blue-900 font-semibold">Invoice</th>
                    <th className="text-left py-4 px-2 text-blue-900 font-semibold">Jenis</th>
                    <th className="text-left py-4 px-2 text-blue-900 font-semibold">Jumlah</th>
                    <th className="text-left py-4 px-2 text-blue-900 font-semibold">Status</th>
                    <th className="text-left py-4 px-2 text-blue-900 font-semibold">Tanggal</th>
                    <th className="text-left py-4 px-2 text-blue-900 font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.map((payment, index) => (
                    <tr key={payment.id} className="border-b border-blue-50 hover:bg-blue-50/50 transition-colors group"
                        style={{ animationDelay: `${index * 100}ms` }}>
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <UserIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-blue-900">{payment.studentName}</div>
                            <div className="text-sm text-blue-600">{payment.studentId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="font-mono text-sm bg-blue-100 px-2 py-1 rounded text-blue-800">
                          {payment.invoiceNumber}
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-blue-900">{payment.type}</div>
                        <div className="text-sm text-blue-600">{payment.month}</div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="font-bold text-lg text-blue-900">
                          Rp {payment.amount.toLocaleString('id-ID')}
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(payment.status)}
                          {getStatusBadge(payment.status)}
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-blue-900">
                          {payment.paymentDate ? (
                            <div>
                              <div className="font-medium">Dibayar</div>
                              <div className="text-sm text-green-600">{payment.paymentDate}</div>
                              {payment.paymentMethod && (
                                <div className="text-xs text-blue-600">{payment.paymentMethod}</div>
                              )}
                            </div>
                          ) : (
                            <div>
                              <div className="font-medium">Jatuh Tempo</div>
                              <div className="text-sm text-red-600">{payment.dueDate}</div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                            <PrinterIcon className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                            Detail
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredPayments.length === 0 && (
                <div className="text-center py-12">
                  <CurrencyDollarIcon className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <p className="text-blue-600 text-lg">Tidak ada data pembayaran yang sesuai dengan filter</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up-delay-4">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50 hover:scale-105 transform cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform">
                <BanknotesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">Rekap Keuangan</h3>
              <p className="text-green-700 text-sm">Lihat laporan keuangan bulanan dan tahunan</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-yellow-50/50 hover:scale-105 transform cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform">
                <ExclamationTriangleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-yellow-900 mb-2">Reminder Otomatis</h3>
              <p className="text-yellow-700 text-sm">Kirim pengingat pembayaran ke orang tua</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 hover:scale-105 transform cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform">
                <CreditCardIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2">Payment Gateway</h3>
              <p className="text-purple-700 text-sm">Kelola metode pembayaran digital</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

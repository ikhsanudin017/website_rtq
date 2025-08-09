import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function getAttendanceStatusColor(status: string): string {
  switch (status) {
    case 'PRESENT':
      return 'text-green-600 bg-green-50'
    case 'ABSENT':
      return 'text-red-600 bg-red-50'
    case 'LATE':
      return 'text-yellow-600 bg-yellow-50'
    case 'SICK':
      return 'text-blue-600 bg-blue-50'
    case 'PERMISSION':
      return 'text-purple-600 bg-purple-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}

export function getPaymentStatusColor(status: string): string {
  switch (status) {
    case 'PAID':
      return 'text-green-600 bg-green-50'
    case 'PENDING':
      return 'text-yellow-600 bg-yellow-50'
    case 'OVERDUE':
      return 'text-red-600 bg-red-50'
    case 'CANCELLED':
      return 'text-gray-600 bg-gray-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}

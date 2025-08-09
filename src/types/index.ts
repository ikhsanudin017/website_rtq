export interface AuthUser {
  id: string
  username: string
  email?: string
  role: 'ADMIN' | 'PARENT'
  studentProfiles?: {
    id: string
    name: string
    studentId: string
  }[]
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}

export interface Student {
  id: string
  studentId: string
  name: string
  birthDate: Date
  address: string
  phone?: string
  parentName: string
  parentPhone: string
  parentEmail?: string
  enrollDate: Date
  isActive: boolean
  classLevel: string
  targetHafalan: number
  createdAt: Date
  updatedAt: Date
}

export interface Attendance {
  id: string
  studentId: string
  date: Date
  status: 'PRESENT' | 'ABSENT' | 'LATE' | 'SICK' | 'PERMISSION'
  notes?: string
  recordedBy: string
  createdAt: Date
}

export interface Assessment {
  id: string
  studentId: string
  type: 'HAFALAN_BARU' | 'MUROJA_AH' | 'TAJWID' | 'MAKHORIJUL_HURUF' | 'KELANCARAN'
  surah?: string
  ayatFrom?: number
  ayatTo?: number
  juz?: number
  score: number
  notes?: string
  assessedBy: string
  assessedDate: Date
  createdAt: Date
}

export interface Payment {
  id: string
  studentId: string
  type: 'SPP' | 'INFAQ' | 'KEGIATAN' | 'SERAGAM' | 'LAINNYA'
  amount: number
  description: string
  dueDate: Date
  paidDate?: Date
  status: 'PENDING' | 'PAID' | 'OVERDUE' | 'CANCELLED'
  paymentMethod?: string
  transactionId?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface DailyQuote {
  id: string
  content: string
  source: string
  reference: string
  dateFor: Date
}

export interface NotificationData {
  id: string
  studentId?: string
  title: string
  message: string
  type: 'PAYMENT_REMINDER' | 'PAYMENT_CONFIRMED' | 'ATTENDANCE_ALERT' | 'ASSESSMENT_UPDATE' | 'GENERAL_INFO' | 'SYSTEM_UPDATE'
  isRead: boolean
  sentAt: Date
  createdAt: Date
}

'use client'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

import ParentLayout from '@/components/layouts/ParentLayout'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function ParentLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute allowedRoles={['parent']}>
      <ParentLayout>{children}</ParentLayout>
    </ProtectedRoute>
  )
}

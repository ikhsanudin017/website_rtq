'use client'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

import UstadzLayout from '@/components/layouts/UstadzLayout'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function UstadzLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute allowedRoles={['ustadz']}>
      <UstadzLayout>{children}</UstadzLayout>
    </ProtectedRoute>
  )
}

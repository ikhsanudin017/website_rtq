'use client'

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

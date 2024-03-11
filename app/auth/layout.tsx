import * as React from 'react'

import BackButton from '@/components/auth/back-button'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative mx-auto flex size-full max-w-screen-md flex-col items-center justify-center px-6 md:px-0">
      <BackButton />
      {children}
    </main>
  )
}

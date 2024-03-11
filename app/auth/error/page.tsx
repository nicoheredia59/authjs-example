import * as React from 'react'
import { Metadata } from 'next'

import AuthPageLink from '@/components/auth/link'

export const metadata: Metadata = {
  title: 'Auth.js - Auth Error',
  description: ''
}

export default function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <span>
        Back to <AuthPageLink href="/auth/login" label="Login" />
      </span>
    </div>
  )
}

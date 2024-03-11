import * as React from 'react'
import { Metadata } from 'next'

import AuthPageLink from '@/components/auth/link'
import Social from '@/components/auth/social'

export const metadata: Metadata = {
  title: 'Auth.js - Register',
  description: ''
}

export default function RegisterPage() {
  return (
    <React.Suspense>
      <div>
        <section className="flex flex-col items-center gap-y-8">
          <header className="">
            <h1 className="mb-4 text-2xl font-semibold text-zinc-900">
              Auth.js exmaple - Register
            </h1>
            <p className="text-zinc-600" style={{ maxWidth: '45ch' }}>
              Secure your future, register your sale today.
            </p>
          </header>
          <Social />
          <footer className="flex flex-col gap-y-6">
            <span className="text-zinc-600">
              Already have an account?{' '}
              <AuthPageLink href={'/auth/login'} label="Sign In" />
            </span>
          </footer>
        </section>
      </div>
    </React.Suspense>
  )
}

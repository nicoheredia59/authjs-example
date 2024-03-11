import * as React from 'react'
import { Metadata } from 'next'

import AuthPageLink from '@/components/auth/link'
import LoginForm from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Auth.js - Login',
  description: ''
}

export default function LoginPage() {
  return (
    <React.Suspense>
      <div>
        <section className="flex flex-col items-center gap-y-8">
          <header className="">
            <h1 className="mb-4 text-2xl font-semibold text-zinc-900">
              Auth.js exmaple - Login
            </h1>
            <p className="text-zinc-600" style={{ maxWidth: '45ch' }}>
              Welcome back. Let&apos;s conquer your day.
            </p>
          </header>
          <LoginForm />
          <footer className="flex flex-col gap-y-6">
            <span className="text-zinc-600">
              Don&apos;t have an account yet?{' '}
              <AuthPageLink href={'/auth/register'} label="Sign Up" />
            </span>
          </footer>
        </section>
      </div>
    </React.Suspense>
  )
}

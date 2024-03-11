'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export default function Social() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const handleLogin = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <React.Suspense>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <span className="flex w-full flex-col items-center gap-y-4">
          <button
            onClick={() => handleLogin('github')}
            className="inline-flex w-full items-center justify-center gap-x-3 rounded-md border border-zinc-900 p-2 px-4"
          >
            Sign in with Github
            <FaGithub size={24} />
          </button>
          <button
            onClick={() => handleLogin('google')}
            className="inline-flex w-full items-center justify-center gap-x-3 rounded-md border border-zinc-900 p-2 px-4"
          >
            Sign in with Google
            <FcGoogle size={24} />
          </button>
        </span>
      </div>
    </React.Suspense>
  )
}

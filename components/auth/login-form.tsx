'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'

import AuthError from './auth-error'
import Social from './social'

export default function LoginForm() {
  const serachParams = useSearchParams()
  const urlError =
    serachParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email alreay in use with a different provider!'
      : ''

  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <Social />
        <AuthError message={urlError} />
      </div>
    </div>
  )
}

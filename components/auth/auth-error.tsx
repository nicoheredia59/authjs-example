'use client'

import * as React from 'react'

interface AuthErrorProps {
  message: string
}

export default function AuthError({ message }: AuthErrorProps) {
  if (!message) return null

  return (
    <div className="rounded-md border border-red-200 bg-red-500/10 p-2 px-4 text-red-500">
      <p>{message}</p>
    </div>
  )
}

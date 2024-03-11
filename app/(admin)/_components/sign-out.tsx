'use client'

import * as React from 'react'
import { signOut } from 'next-auth/react'

export default function SignOut() {
  const handleSignOut = () => {
    signOut()
  }

  return (
    <div>
      <button onClick={() => handleSignOut()}>Sign out</button>
    </div>
  )
}

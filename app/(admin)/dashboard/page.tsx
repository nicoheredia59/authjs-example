import * as React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import { auth } from '@/auth'

import SignOut from '../_components/sign-out'

export const metadata: Metadata = {
  title: 'Auth.js - Dashboard',
  description: ''
}

export default async function DashboardPage() {
  const session = await auth()

  return (
    <div>
      <header>
        <nav className="inline-flex w-full flex-wrap items-center justify-between gap-y-2 py-4">
          <div className="inline-flex items-center gap-x-3">
            <Image
              src={session?.user.image as string}
              alt=""
              width={100}
              height={100}
              className="size-10 rounded-full"
            />
            <span>
              <p className="font-semibold">{session?.user.name}</p>
              <p className="text-sm">{session?.user.email}</p>
            </span>
          </div>
          <SignOut />
        </nav>
      </header>
      <h1>
        Welcome back <b>{session?.user?.name}</b>
      </h1>
    </div>
  )
}

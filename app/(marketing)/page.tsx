import * as React from 'react'
import Link from 'next/link'

import { auth } from '@/auth'

export default async function LandingPage() {
  const session = await auth()

  return (
    <main className="mx-auto flex size-full max-w-screen-md flex-col items-center justify-center">
      <header className="flex flex-col items-center gap-y-6">
        <span className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-semibold text-zinc-900">
            Auth js + Postgres + Prisma + Nextjs
          </h1>
          <span style={{ maxWidth: '60ch' }} className="text-zinc-600">
            <p>
              Leverage the power of NextAuth.js for seamless integration with
              Google and GitHub logins.
            </p>
            <p>
              This example is built with Auth.js, Prisma, and Next.js. It uses
              Postgres as a database.
            </p>
          </span>
        </span>
        <nav className="inline-flex gap-x-3">
          {session?.user ? (
            <>
              <Link
                href={'/dashboard'}
                className="rounded bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-900/95"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                href={'/auth/login'}
                className="rounded bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-900/95"
              >
                Sing In
              </Link>
              <Link
                href={'/auth/register'}
                className="rounded bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-900/95"
              >
                Sing Up
              </Link>
            </>
          )}
        </nav>
      </header>
      <footer className="absolute bottom-10">
        <span className="text-zinc-600">
          Source{' '}
          <Link
            className="font-medium text-zinc-900 underline underline-offset-4 hover:text-blue-500"
            href="https://github.com/nicoheredia59/authjs-example"
          >
            Github
          </Link>
        </span>
      </footer>
    </main>
  )
}

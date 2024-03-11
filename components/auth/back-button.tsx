import * as React from 'react'
import Link from 'next/link'

export default function BackButton() {
  return (
    <div className="absolute left-6 top-6 text-zinc-600 md:left-0">
      Back to{' '}
      <Link
        href="/"
        className="font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-blue-500 "
      >
        Home
      </Link>
    </div>
  )
}

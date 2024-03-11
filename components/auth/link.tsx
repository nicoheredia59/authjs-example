import * as React from 'react'
import Link from 'next/link'

export default function AuthPageLink({
  href,
  label
}: {
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-blue-500"
    >
      {label}
    </Link>
  )
}

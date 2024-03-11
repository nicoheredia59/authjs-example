import * as React from 'react'
import Link from 'next/link'

export default function TextLink({
  href,
  label
}: {
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
    >
      {label}
    </Link>
  )
}

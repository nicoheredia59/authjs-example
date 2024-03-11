import * as React from 'react'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto flex size-full max-w-screen-md flex-col px-6 md:px-0">
      {children}
    </main>
  )
}

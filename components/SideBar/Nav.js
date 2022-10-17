import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href={'/'}>Home </Link></li>
        <li><Link href={'/income'}>Income</Link></li>
      </ul>
    </nav>
  )
}

import Link from 'next/link'
import React from 'react'

export default function Index() {
  return (
    <div>
      <h1>Comparación de métodos de renderización</h1>
      <ul>
        <li>
          <Link href="/CSR">CSR - Client Side Rendering</Link>
        </li>
        <li>
          <Link href="/SSR">SSR - Server Side Rendering</Link>
        </li>
        <li>
          <Link href="/SSG">SSG - Static Site Generation</Link>
        </li>
        <li>
          <Link href="/ISR">ISR - Incremental Static Regeneration</Link>
        </li>
      </ul>
    </div>
  )
}

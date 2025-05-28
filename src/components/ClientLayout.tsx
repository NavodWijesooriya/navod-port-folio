'use client'

import { useState, useEffect } from 'react'
import Loading from './Loading'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return <>{loading ? <Loading /> : children}</>
}

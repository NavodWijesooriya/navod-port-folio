'use client'

import { Ghost } from 'lucide-react'
import Link from 'next/link' // Add this import

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      {/* Icon */}
      <Ghost size={72} className="text-green-500 mb-6" />

      {/* Headline */}
      <h1 className="text-5xl font-extrabold tracking-tight text-green-500">404</h1>
      <h2 className="text-3xl font-bold mt-2">Page Not Found</h2>

      {/* Description */}
      <p className="mt-2 text-gray-400 max-w-md">
        Sorry the page you are looking for does not exist or has been moved.
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}
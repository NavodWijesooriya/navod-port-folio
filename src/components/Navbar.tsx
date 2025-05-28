'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Resume', href: '/resume' },
    { label: 'Get In Touch', href: '/contact' },
    { label: 'About Me', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md shadow-sm px-6 lg:px-20 py-4 transition-all duration-300 font-mono">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold text-white tracking-tight font-mono">
          <span className="text-green-500 italic">Navod</span> Dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium font-mono">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-green-400 transition-colors duration-200 font-mono"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-5 py-2 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition-all duration-300 font-mono"
        >
          Hire Me
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white transition font-mono"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 mt-2' : 'max-h-0'
          }`}
      >
        <div className="bg-gray-900 rounded-lg px-6 py-4 space-y-4 text-gray-300 font-medium font-mono">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block hover:text-green-400 transition-colors duration-200 font-mono"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="inline-block px-8 py-2 bg-green-600 text-white font-bold rounded-md shadow-lg hover:bg-green-700 transition duration-300 glow-effect font-mono"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

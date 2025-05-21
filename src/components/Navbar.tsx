'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md shadow-sm px-6 lg:px-20 py-4 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold text-white tracking-tight">
          <span className="text-green-500 italic">Navod</span> Dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          {['Home', 'Projects', 'Skyles', 'Resume', 'Get In Touch'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-green-400 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-block px-5 py-2 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition-all duration-300"
        >
          Hire Me
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 mt-2' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-900 rounded-lg px-6 py-4 space-y-4 text-gray-300 font-medium">
          {['Home', 'Projects', 'Skills', 'Resume', 'Get In Touch'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block hover:text-green-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block w-full text-center px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Let’s get started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

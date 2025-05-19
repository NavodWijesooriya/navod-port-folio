'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between font-sans-serif">
        <Link
          href="/"
          className="text-3xl font-black font-sans-serif text-gray-800  transition duration-300"
        >
          Navod@me
        </Link>


        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/skills" className="hover:text-blue-600">Skills</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <Link href="#about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link href="#projects" className="block text-gray-700 hover:text-blue-600">Projects</Link>
          <Link href="#skills" className="block text-gray-700 hover:text-blue-600">Skills</Link>
          <Link href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

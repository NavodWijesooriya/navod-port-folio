'use client'

import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-white via-blue-50 to-purple-100">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Hi, I'm Navod Wijesooriya
      </h1>
      <p className="mt-4 text-gray-700 max-w-2xl text-lg md:text-xl">
        Passionate full-stack web developer specialized in building modern, scalable apps with Next.js, React, Firebase, Payload CMS, and Docker.
        Always exploring new tech, currently diving into real-time backend systems.
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="https://github.com/your-username" target="_blank" className="text-gray-700 hover:text-black text-2xl">
          <FaGithub />
        </Link>
        <Link href="https://linkedin.com/in/your-profile" target="_blank" className="text-blue-700 hover:text-blue-900 text-2xl">
          <FaLinkedin />
        </Link>
        <Link href="mailto:your-email@example.com" className="text-red-600 hover:text-red-800 text-2xl">
          <FaEnvelope />
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="#projects"
          className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          View My Work
        </Link>
      </div>
    </section>
  )
}

export default Hero

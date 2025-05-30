'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-2xl bg-gray-900/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 relative inline-block text-white">
          Navod Wijesooriya
          <span className="block w-16 h-1 bg-green-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide transition-all duration-300 mb-8">
          I am a <span className="text-purple-400">dedicated full-stack web developer</span> crafting elegant, high-performance digital solutions with technologies like
          <span className="text-blue-400"> React</span>, <span className="text-cyan-400">Next.js</span>, and <span className="text-yellow-300">Firebase</span>.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-2 bg-green-600 text-white font-bold rounded-md shadow-lg hover:bg-green-700 transition duration-300 glow-effect"
          aria-label="Contact me to discuss your project"
        >
          Hire Me
        </Link>
      </div>

      {/* Right Content - Image */}
      <div className="w-full max-w-md flex justify-center items-center mx-auto">
        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
          <Image
            src="/assets/edit-image.png"
            alt="Navod Wijesooriya - Professional Headshot of Full-stack Web Developer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Glow effect */}
      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3);
        }
      `}</style>
    </section>
  )
}

export default Hero

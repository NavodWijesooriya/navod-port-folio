'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-32 py-20 gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Navod Wijesooriya
                </h1>
                <p className="text-gray-400 text-lg font-mono leading-relaxed mb-8">
                    Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                    href="#get-started"
                    className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-md shadow-lg hover:bg-green-700 transition duration-300 glow-effect"
                >
                    Let’s get started &gt;
                </Link>
            </div>

            {/* Right Content - Image */}
            <div className="w-full max-w-md flex justify-center items-center mx-auto">
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
                    <Image
                        src="/assets/your-image.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Glow effect (custom utility via Tailwind plugin or custom CSS) */}
            <style jsx>{`
                .glow-effect {
                    box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3);
                }
            `}</style>
        </section>
    )
}

export default Hero

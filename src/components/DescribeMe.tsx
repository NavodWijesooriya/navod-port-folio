'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-white p-10 m-10 rounded-lg">
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-2xl">
                <div className="text-sm mb-4 font-medium text-gray-600">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full">Hello There!</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                    I’m <span className="text-yellow-500 italic">Navod Wijesooriya</span>, <br />
                    Web developer <br />
                    <span className="text-black">Based in Srilanka</span>
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    I build modern, scalable apps using Next.js, React, Firebase, Payload CMS, and Docker. Currently exploring real-time backend systems and pushing the boundaries of full-stack development.
                </p>

                <div className="mt-6 flex gap-4 flex-wrap justify-center lg:justify-start">
                    <Link
                        href="#portfolio"
                        className="flex items-center gap-2 px-5 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition"
                    >
                        View My Portfolio
                        <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
                    </Link>
                    <Link
                        href="#contact"
                        className="px-5 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>

            {/* Right Content - Image and Tags */}
            <div className="mt-10 lg:mt-0 relative w-full max-w-md">
                <div className="absolute top-4 right-4 text-sm bg-yellow-400 text-white px-4 py-1 rounded-full shadow">
                    Next Js
                </div>
                <div className="absolute bottom-6 left-4 text-sm bg-green-700 text-white px-4 py-1 rounded-full shadow">
                    Developments
                </div>

                <div className="relative w-100 h-100 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
                    <Image
                        src="/assets/" // Replace with your actual image path
                        alt="Navod Wijesooriya"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero

'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Optionally send data via email service or API here
    setSubmitted(true)
  }

  return (
    // Match Skills section styles
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          Hire Me
          <span className="block w-16 h-1 bg-green-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide text-center max-w-xl mx-auto mb-10 transition-all duration-300">
          I am currently available for freelance or full-time work. Fill out the form below and I’ll get back to you!
        </p>

        {/* Contact Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition-all duration-300"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-green-400 mt-10">
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p>I’ve received your message and will respond soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}

'use client'

import { Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          My Resume
          <span className="block w-16 h-1 bg-purple-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide text-center max-w-xl mx-auto mb-12 transition-all duration-300">
          Below you can view or download my most recent CV. Feel free to reach out if you would like to collaborate!
        </p>
        <div className="w-full max-w-4xl aspect-video mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-black/60">
          <iframe
            src="assets/Navod_Wijesooriya_Resume.pdf"
            title="Resume PDF"
            className="w-full h-full"
          ></iframe>
        </div>
        <a
          href="assets/Navod_Wijesooriya_Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition-all duration-300 font-mono"
        >
          <Download size={20} />
          Download Resume (PDF)
        </a>
      </div>
    </section>
  )
}

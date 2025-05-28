'use client'

export default function AboutPage() {
  return (
    // Use Skills page section/card style
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          About Me
          <span className="block w-16 h-1 bg-green-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide text-center max-w-2xl mx-auto mb-10 transition-all duration-300">
          Hi, I am <span className="text-white font-semibold">Navod</span> — a passionate web developer focused on building modern, responsive, and accessible websites and applications.
          I love working with technologies like <span className="text-green-400">Next.js</span>, <span className="text-green-400">React</span>, and <span className="text-green-400">Firebase</span> to create seamless digital experiences.
        </p>

        {/* Section */}
        <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl p-6 md:p-8 space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">What I Do</h2>
            <p>
              I specialize in frontend development with a strong eye for clean UI and smooth user experiences. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="mt-2">
              Whether it is a landing page, portfolio, blog, or full-stack application — I bring ideas to life using modern web technologies and best practices.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Next.js & React</li>
              <li>TypeScript & JavaScript (ES6+)</li>
              <li>Tailwind CSS & Chakra UI</li>
              <li>Firebase, Sanity, Payload CMS</li>
              <li>Docker, Nginx, VPS Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client';

import React from 'react';
import { CheckCircleIcon } from 'lucide-react'; // optional: for skill icons

const skills = {
  frontend: ['Next.js', 'React 19', 'Tailwind CSS', 'TypeScript', 'Chakra UI'],
  backend: ['Firebase', 'Payload CMS', 'SQLite', 'Node.js', 'Express'],
  tools: ['Git & GitHub', 'Docker', 'Vercel', 'Postman', 'Figma'],
};

const SkillsPage = () => {
  return (
    // Match Projects section styles
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          My Skills
          <span className="block w-16 h-1 bg-purple-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide text-center max-w-xl mx-auto mb-12 transition-all duration-300">
          These are the technologies and tools I work with regularly.
        </p>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold capitalize mb-4 border-b border-white/10 pb-2 font-mono text-white">
                  {category}
                </h2>
                <ul className="space-y-2 text-gray-300 text-sm font-mono">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircleIcon size={16} className="text-green-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;

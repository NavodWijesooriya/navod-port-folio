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
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          My Skills
          <span className="block w-16 h-1 bg-purple-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide mb-12 transition-all duration-300">
          These are the technologies and tools I work with regularly.
        </p>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div
              key={category}
              className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold capitalize mb-4 border-b border-white/10 pb-2 font-mono text-white">
                  {category === 'frontend' ? (
                    <span className="text-blue-400">{category}</span>
                  ) : category === 'backend' ? (
                    <span className="text-purple-400">{category}</span>
                  ) : (
                    <span className="text-yellow-300">{category}</span>
                  )}
                </h2>
                <ul className="space-y-2 text-gray-300 text-sm font-mono leading-relaxed tracking-wide">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 transition-all duration-300">
                      <CheckCircleIcon size={16} className={
                        catIndex === 0 ? "text-blue-400" :
                        catIndex === 1 ? "text-purple-400" : "text-yellow-300"
                      } />
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

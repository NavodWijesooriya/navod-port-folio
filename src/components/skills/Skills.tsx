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
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          These are the technologies and tools I work with regularly.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold capitalize mb-4 border-b border-white/10 pb-2">
                {category}
              </h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircleIcon size={16} className="text-green-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;

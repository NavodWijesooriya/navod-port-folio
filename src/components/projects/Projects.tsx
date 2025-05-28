'use client';

import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: 'Tourism Web App',
    description: 'A feature-rich tourism platform with Next.js, Firebase, and real-time data.',
    link: 'https://your-tourism-app.com',
    image: '/images/tourism-app.png',
    tags: ['Next.js', 'Firebase', 'Tailwind'],
  },
  {
    title: 'Customer Issues Tracker',
    description: 'A customer issues tracking system built with React 19, Node.js, and MongoDB.',
    link: 'https://crm-interithm.vercel.app/',
    image: '/assets/crm.png',
    tags: ['React', 'Firebase', 'Nextjs'],
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React 19 and styled with Tailwind CSS.',
    link: '#',
    image: '/assrts/port-folio.png',
    tags: ['React 19', 'Tailwind', 'Next.js'],
  },
];

const ProjectsPage = () => {
  return (
    // ...existing code...
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          My Projects
          <span className="block w-16 h-1 bg-purple-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide text-center max-w-xl mx-auto mb-12 transition-all duration-300">
          A selection of the apps and websites I have built using modern web technologies.
        </p>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white font-mono">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-4 font-mono">{project.description}</p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    // ...existing code...
  );
};

export default ProjectsPage;
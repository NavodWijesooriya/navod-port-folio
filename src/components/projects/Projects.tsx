'use client';

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';

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
    link: 'projects/tourism-web-app',
    image: '/assets/mooi-home.png',
    tags: ['Next.js', 'Firebase', 'Tailwind'],
  },
  {
    title: 'Password Manager Mobile App',
    description: 'A password manager mobile app built with React Native and expo.',
    link: 'projects/passward-manager-mobileapp',
    image: '/assets/dashboard.jpeg',
    tags: ['React', 'Expo'],
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React 19 and styled with Tailwind CSS.',
    link: 'projects',
    image: '/assets/port-folio.png', // fixed typo from '/assrts/port-folio.png'
    tags: ['React 19', 'Tailwind', 'Next.js'],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
            My Projects
            <span className="block w-16 h-1 bg-purple-500 mt-2 rounded"></span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide mb-12 transition-all duration-300">
            A selection of the apps and websites I have built using modern web technologies.
          </p>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20"
                aria-label={`View ${project.title} project`}
              >
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} by Navod Wijesooriya`}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={200}
                  priority={index === 0}
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-white font-mono">{project.title}</h2>
                  <p className="text-gray-300 text-sm mb-4 font-mono leading-relaxed transition-all duration-300">{project.description}</p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-800 rounded-full font-mono"
                          style={{
                            color: idx % 3 === 0 ? '#c084fc' : idx % 3 === 1 ? '#60a5fa' : '#fde047'
                          }}
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

      {/* Structured data for projects */}
      <Script
        id="project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "SoftwareApplication",
              "position": index + 1,
              "name": project.title,
              "description": project.description,
              "applicationCategory": "WebApplication",
              "operatingSystem": "Any",
              "url": project.link,
              "author": {
                "@type": "Person",
                "name": "Navod Wijesooriya"
              },
              "keywords": project.tags?.join(", ")
            }))
          })
        }}
      />
    </>
  );
};

export default ProjectsPage;
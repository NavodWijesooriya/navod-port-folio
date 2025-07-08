// components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          About Me
          <span className="block w-16 h-1 bg-purple-500 mt-2 rounded"></span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide transition-all duration-300">
          <span className="sr-only">Navod Wijesooriya, Full-stack Web Developer, React, Next.js, Firebase, Portfolio, Sri Lanka, Freelancer</span>
          I am a <span className="text-purple-400">passionate full-stack web developer</span> specializing in crafting
          high-performance, user-friendly web applications using modern technologies like
          <span className="text-blue-400"> React</span>, <span className="text-cyan-400">Next.js</span>, and{" "}
          <span className="text-yellow-300">Firebase</span>.
          <br />
          <br />
          With a strong focus on <span className="italic text-green-400">clean design</span>, responsive interfaces,
          and <span className="text-pink-400">real-time functionality</span>, I love turning complex problems into
          elegant solutions.
          <br />
          <br />
          Whether you are looking to build a sleek portfolio, a dynamic business platform, or a scalable admin panel —
          <span className="text-purple-300 font-semibold"> I am here to bring your ideas to life.</span>
          <br />
          <br />
          <span className="sr-only">Contact me for freelance web development, React, Next.js, Firebase, and modern web solutions.</span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

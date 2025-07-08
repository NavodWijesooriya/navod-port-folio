'use client';

import React from 'react';
import {
  FaGlobeAsia,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaRocket
} from 'react-icons/fa';

const TravelProjectSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          🌍 Travel Booking Web App
          <span className="block w-16 h-1 bg-purple-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide mb-12 transition-all duration-300">
          A modern travel booking platform built for seamless user experiences. This full-stack web application allows users to explore, book, and manage tour packages with ease.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex items-start gap-4">
              <FaGlobeAsia className="text-3xl text-green-400" />
              <div>
                <h3 className="text-xl font-semibold text-white font-mono mb-2">Dynamic Tour Packages</h3>
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  Admins can add tour packages with images, descriptions, and Google Maps URLs, which are displayed dynamically on the site.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex items-start gap-4">
              <FaMobileAlt className="text-3xl text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold text-white font-mono mb-2">Mobile-Responsive Design</h3>
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  Optimized for mobile, tablet, and desktop devices using Tailwind CSS responsive utilities.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex items-start gap-4">
              <FaDatabase className="text-3xl text-yellow-300" />
              <div>
                <h3 className="text-xl font-semibold text-white font-mono mb-2">Firestore Integration</h3>
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  All tour data, reviews, and images are stored and retrieved from Firebase Firestore in real time.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex items-start gap-4">
              <FaRocket className="text-3xl text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-white font-mono mb-2">Admin Panel & Booking Emails</h3>
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  Admins manage content via a custom admin panel. Booking confirmation emails are sent using Resend.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5 - Gallery Management */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaCode className="text-3xl text-pink-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">Gallery Image Management</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Admins can upload and organize travel gallery photos directly from the admin panel, making the gallery page fully dynamic.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700">
                <img
                  src="/assets/mooi-packahes.jpeg"
                  alt="Gallery Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Feature 6 - Travel Website Image Upload */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaGlobeAsia className="text-3xl text-cyan-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">Travel Website Image Upload</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Easily upload homepage banners, section thumbnails, and highlight images from the admin panel to update the site visuals dynamically.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700">
                <img
                  src="/images/travel-feature.jpg"
                  alt="Section Image Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl mb-10">
          <h3 className="text-2xl font-extrabold mb-6 text-white relative inline-block font-mono">
            🛠 Technologies Used
            <span className="block w-12 h-1 bg-blue-400 mt-2 rounded"></span>
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 font-mono">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Next.js 14 (App Router)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Firebase Firestore
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Firebase Auth
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
              Firebase Admin SDK
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Resend Email API
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              React Icons
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
              VPS Hosting (Docker + NGINX)
            </li>
          </ul>
        </div>

        {/* Optional Preview Button */}
        <div className="text-center">
          <a
            href="https://yourtravelapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-md shadow-lg hover:bg-purple-700 transition duration-300"
            style={{
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.3)'
            }}
          >
            🔗 View Live Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default TravelProjectSection;

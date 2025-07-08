'use client';

import React from 'react';
import {
  FaGlobeAsia,
  FaCode,
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
          A comprehensive travel booking platform with dynamic tour packages, real-time booking system, and powerful admin management. Users can explore destinations, book tours, and admins can manage content through a dedicated admin panel.
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
                  Admins can create, edit, and manage tour packages with detailed descriptions, multiple images, pricing, duration, and Google Maps integration for seamless location display.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex items-start gap-4">
              <FaRocket className="text-3xl text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-white font-mono mb-2">Real-Time Booking System</h3>
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  Users can book tour packages with real-time availability checking, secure payment processing, and instant email confirmations with booking details.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex items-start gap-4">
              <FaCode className="text-3xl text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold text-white font-mono mb-2">Admin Panel Dashboard</h3>
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  Comprehensive admin interface for managing tour packages, viewing bookings, processing orders, uploading images, and managing customer inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex items-start gap-4">
              <FaDatabase className="text-3xl text-yellow-300" />
              <div>
                <h3 className="text-xl font-semibold text-white font-mono mb-2">Order Management System</h3>
                <p className="text-gray-300 text-sm font-mono leading-relaxed">
                  Admins can view, process, and manage all tour bookings with detailed customer information, payment status, and booking history tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5 - Blog Management */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaCode className="text-3xl text-pink-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">Blog Management System</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Admins can create, edit, and publish travel blogs with rich text editor, image uploads, and SEO optimization to engage customers and improve search rankings.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700">
                <img
                  src="/assets/mooi-packahes.jpeg"
                  alt="Blog Management Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Feature 6 - Dynamic Image Gallery */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaGlobeAsia className="text-3xl text-cyan-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">Dynamic Image & Place Management</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Upload and organize destination images, create photo galleries for each tour package, and manage featured destinations with location details and highlights.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700">
                <img
                  src="/assets/mooi-home.png"
                  alt="Dynamic Gallery Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl mb-10">
          <h3 className="text-2xl font-extrabold mb-6 text-white relative inline-block font-mono">
            🌟 Key Features
            <span className="block w-12 h-1 bg-green-400 mt-2 rounded"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Dynamic tour package creation & management</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Real-time booking with payment integration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Comprehensive admin dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                <span className="text-gray-300 font-mono">Order tracking & management system</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Blog content management system</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Multiple image upload & gallery management</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Google Maps integration for locations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Email notifications & confirmations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Mobile-responsive design</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">SEO-optimized content management</span>
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
              Firebase Storage
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Resend Email API
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Stripe Payment Gateway
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
              Google Maps API
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              React Hook Form
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

        {/* Admin Features Section */}
        <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl mb-10">
          <h3 className="text-2xl font-extrabold mb-6 text-white relative inline-block font-mono">
            🔧 Admin Panel Features
            <span className="block w-12 h-1 bg-red-400 mt-2 rounded"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Package Management</h4>
                  <p className="text-gray-400 text-sm font-mono">Create, edit, delete tour packages with pricing and availability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Order Dashboard</h4>
                  <p className="text-gray-400 text-sm font-mono">View and manage all tour bookings with customer details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Image Gallery</h4>
                  <p className="text-gray-400 text-sm font-mono">Upload and organize destination photos and galleries</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-yellow-300 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Blog Management</h4>
                  <p className="text-gray-400 text-sm font-mono">Create and publish travel blogs with rich content editor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-pink-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Analytics & Reports</h4>
                  <p className="text-gray-400 text-sm font-mono">Track bookings, revenue, and popular destinations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Customer Management</h4>
                  <p className="text-gray-400 text-sm font-mono">Manage customer profiles and booking history</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Preview Button */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://mooilankatravels.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-md shadow-lg hover:bg-purple-700 transition duration-300"
              style={{
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.3)'
              }}
            >
              🔗 View Live Project
            </a>
            <a
              href="https://mooilankatravels.com/superAdmin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-emerald-600 text-white font-bold rounded-md shadow-lg hover:bg-emerald-700 transition duration-300"
              style={{
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.3)'
              }}
            >
              🛠 Admin Panel Demo
            </a>
          </div>
          <p className="text-gray-400 text-sm font-mono">
            Experience the full booking system and explore the admin dashboard
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelProjectSection;

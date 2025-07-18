'use client';

import React from 'react';
import {
  FaLock,
  FaShieldAlt,
  FaEye,
  FaPlus,
  FaMobile,
  FaFingerprint
} from 'react-icons/fa';

const PasswordManagerMobileApp: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 md:p-12">
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative inline-block">
          🔐 Password Manager Mobile App
          <span className="block w-16 h-1 bg-blue-500 mt-2 rounded"></span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed tracking-wide mb-12 transition-all duration-300">
          A secure React Native mobile app built with Expo for managing passwords with biometric authentication, encrypted storage, and intuitive user interface. Features login security, dashboard overview, password creation, and detailed password viewing.
        </p>

        {/* App Screens Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Screen 1 - Login */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-blue-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaLock className="text-3xl text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">Login Screen</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Secure authentication with biometric login (fingerprint/face ID), PIN code entry, and master password protection. Features auto-lock functionality and security timeout.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700 bg-gray-800/50">
                <img
                  src="/assets/mobile-app-login.jpeg"
                  alt="Login Screen Preview"
                  className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Screen 2 - Dashboard */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-green-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaShieldAlt className="text-3xl text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">Dashboard Screen</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Overview of all saved passwords with search functionality, categories, recently accessed items, and security strength indicators. Quick access to add new passwords.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700 bg-gray-800/50">
                <img
                  src="/assets/dashboard.jpeg"
                  alt="Dashboard Screen Preview"
                  className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Screen 3 - Add Password */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-purple-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaPlus className="text-3xl text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">Add Password Screen</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Create new password entries with website/app details, username, password generator, category selection, and notes. Built-in password strength analyzer and secure generation.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700 bg-gray-800/50">
                <img
                  src="/assets/addpassword.jpeg"
                  alt="Add Password Screen Preview"
                  className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Screen 4 - View Password */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-yellow-600/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <FaEye className="text-3xl text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">View Password Screen</h3>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Detailed view of saved passwords with copy-to-clipboard functionality, edit options, password visibility toggle, and secure sharing. Shows creation date and last modified info.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-4 border border-gray-700 bg-gray-800/50">
                <img
                  src="/assets/view.jpeg"
                  alt="View Password Screen Preview"
                  className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300"
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
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Biometric authentication (Face ID/Fingerprint)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">AES-256 encryption for password storage</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Built-in password generator</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Password strength analyzer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Secure local storage with encryption</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Copy-to-clipboard functionality</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Search and filter passwords</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Auto-lock security timeout</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Category-based organization</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
                <span className="text-gray-300 font-mono">Cross-platform compatibility (iOS/Android)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl mb-10">
          <h3 className="text-2xl font-extrabold mb-6 text-white relative inline-block font-mono">
            🔒 Security Features
            <span className="block w-12 h-1 bg-red-400 mt-2 rounded"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-red-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">End-to-End Encryption</h4>
                  <p className="text-gray-400 text-sm font-mono">All passwords encrypted with AES-256 before storage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Biometric Lock</h4>
                  <p className="text-gray-400 text-sm font-mono">Face ID and fingerprint authentication support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Auto-Lock Timer</h4>
                  <p className="text-gray-400 text-sm font-mono">Automatic app lock after inactivity period</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Secure Random Generation</h4>
                  <p className="text-gray-400 text-sm font-mono">Cryptographically secure password generation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Local Storage Only</h4>
                  <p className="text-gray-400 text-sm font-mono">No cloud storage, all data stays on device</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-pink-400 rounded-full mt-1"></span>
                <div>
                  <h4 className="text-white font-semibold font-mono">Screen Recording Protection</h4>
                  <p className="text-gray-400 text-sm font-mono">Prevents screenshots and screen recording</p>
                </div>
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
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              React Native
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Expo SDK
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              AsyncStorage
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              Expo SecureStore
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              Expo LocalAuthentication
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              React Navigation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              Expo Crypto
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              React Native Paper
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
              Expo Clipboard
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
              React Hook Form
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Expo ScreenCapture
            </li>
          </ul>
        </div>

        {/* App Features Section */}
        <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl mb-10">
          <h3 className="text-2xl font-extrabold mb-6 text-white relative inline-block font-mono">
            📱 App Functionality
            <span className="block w-12 h-1 bg-purple-400 mt-2 rounded"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMobile className="text-2xl text-blue-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white font-mono mb-2">Cross-Platform Mobile App</h4>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Built with React Native and Expo for seamless performance on both iOS and Android devices with native look and feel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaFingerprint className="text-2xl text-green-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white font-mono mb-2">Biometric Security</h4>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Advanced biometric authentication using device's built-in Face ID, Touch ID, or fingerprint sensors for secure access.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaShieldAlt className="text-2xl text-purple-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white font-mono mb-2">Offline-First Design</h4>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Complete offline functionality with encrypted local storage, ensuring your passwords are accessible without internet connection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaLock className="text-2xl text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white font-mono mb-2">Zero-Knowledge Architecture</h4>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">
                    Your master password and data never leave your device. All encryption/decryption happens locally for maximum security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Repository Link */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/NavodWijesooriya/password-manager-mobile-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-700 text-white font-bold rounded-md shadow-lg hover:bg-gray-600 transition duration-300"
              style={{
                boxShadow: '0 0 20px rgba(75, 85, 99, 0.6), 0 0 40px rgba(75, 85, 99, 0.3)'
              }}
            >
              🔗 View Source Code
            </a>
            <a
              href="https://expo.dev/@navodwijesooriya/password-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
              style={{
                boxShadow: '0 0 20px rgba(37, 99, 235, 0.6), 0 0 40px rgba(37, 99, 235, 0.3)'
              }}
            >
              📱 Try on Expo Go
            </a>
          </div>
          <p className="text-gray-400 text-sm font-mono">
            Scan QR code with Expo Go app to test the mobile application
          </p>
        </div>
      </div>
    </section>
  );
};

export default PasswordManagerMobileApp;

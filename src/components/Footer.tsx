// components/Footer.tsx
import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/navodwijesooriya",
    icon: <Github className="w-5 h-5 text-purple-400" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/navodwijesooriya",
    icon: <Linkedin className="w-5 h-5 text-blue-400" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/navodwijesooriya",
    icon: <Twitter className="w-5 h-5 text-cyan-400" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/navodwijesooriya",
    icon: <Instagram className="w-5 h-5 text-pink-400" />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@navodwijesooriya",
    icon: <Youtube className="w-5 h-5 text-red-500" />,
  },
  {
    name: "Email",
    url: "mailto:navodtwijesooriya@gmail.com",
    icon: <Mail className="w-5 h-5 text-yellow-300" />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-900 via-black to-gray-900 text-gray-300 py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Social Links */}
        <div>
          {/* <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
            Connect with me
          </h3> */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-purple-600 transition-colors rounded-full text-sm font-medium"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right text-sm text-gray-400">
          <p>
            Email:{" "}
            <a
              href="mailto:navodtwijesooriya@gmail.com"
              className="text-yellow-300 hover:underline"
            >
              navodtwijesooriya@gmail.com
            </a>
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +94 71 412 8942
            </a>
          </p>
          <p className="mt-6 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} NavodWijesooriya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

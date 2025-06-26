import React from 'react';
import { icon } from '../assets';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="relative glass-dark backdrop-blur-xl border-t border-white/10">
        <div className="container px-8 py-12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Brand Section */}
            <Link className="flex items-center group" to="/">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <img src={icon} alt="brand-icon" className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="ml-4">
                <span className="text-2xl font-['Orbitron'] font-bold text-gradient">ARTMIND</span>
                <p className="text-white/60 text-sm">AI Art Generator</p>
              </div>
            </Link>

            {/* Center Text */}
            <div className="text-center">
              <p className="text-white/70 text-sm mb-2">
                © 2025 ArtMind AI • Crafted with 💜 by 
                <Link 
                  to="/" 
                  className="text-gradient font-semibold ml-1 hover:underline"
                >
                  @yashborekar
                </Link>
              </p>
              <p className="text-white/50 text-xs">
                Transforming imagination into visual reality
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <div className="text-white/60 text-sm font-light hidden md:block">
                Connect →
              </div>
              
              {/* Twitter */}
              <a 
                href="#" 
                className="glass-dark p-3 rounded-full hover:scale-110 transition-all duration-300 group neon-glow"
                title="Follow on Twitter"
              >
                <svg 
                  fill="currentColor" 
                  className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors duration-300" 
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/YashBorekar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-dark p-3 rounded-full hover:scale-110 transition-all duration-300 group neon-glow"
                title="View on GitHub"
              >
                <svg 
                  fill="currentColor" 
                  className="w-5 h-5 text-white/70 group-hover:text-gray-300 transition-colors duration-300" 
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/yash-borekar-8b7783230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-dark p-3 rounded-full hover:scale-110 transition-all duration-300 group neon-glow"
                title="Connect on LinkedIn"
              >
                <svg 
                  fill="currentColor" 
                  className="w-5 h-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/50 text-xs">
              <span>🎨 Powered by Advanced AI Technology</span>
              <span className="hidden md:block">•</span>
              <span>⚡ Lightning Fast Generation</span>
              <span className="hidden md:block">•</span>
              <span>✨ Unlimited Creative Possibilities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>
    </footer>
  );
}

export default Footer;
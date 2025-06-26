import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Footer } from './components';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen gradient-bg relative">
      {/* Floating Abstract Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Header with Glassmorphism */}
      <header className="w-full flex justify-between items-center glass backdrop-blur-xl sm:px-8 px-4 py-6 border-b border-white/20 sticky top-0 z-50">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <img src={logo} alt="logo" className="w-32 object-contain relative z-10 group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="ml-3">
            <p className="text-white/80 text-sm font-light tracking-wider">POWERED BY</p>
            <h1 className="text-2xl font-bold text-gradient font-['Orbitron']">ARTMIND</h1>
          </div>
        </Link>

        <Link 
          to="/create-post" 
          className="btn-animated neon-glow bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:from-purple-700 hover:to-pink-700 sparkle"
        >
          <span>✨ CREATE MAGIC</span>
        </Link>
      </header>

      <main className="relative z-10 sm:p-8 px-4 py-12 w-full min-h-[calc(100vh-100px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  </BrowserRouter>
);

export default App;

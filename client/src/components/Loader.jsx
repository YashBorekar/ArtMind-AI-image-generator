import React from 'react';

const Loader = () => (
  <div className="flex flex-col items-center justify-center">
    {/* Main Loader */}
    <div className="relative">
      {/* Outer Ring */}
      <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin"></div>
      
      {/* Inner Ring */}
      <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full animate-spin"></div>
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
      
      {/* Sparkles */}
      <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
    </div>
    
    {/* Loading Text */}
    <div className="mt-6 text-center">
      <div className="text-white/80 text-sm font-light">
        <span className="inline-block animate-bounce delay-0">C</span>
        <span className="inline-block animate-bounce delay-100">r</span>
        <span className="inline-block animate-bounce delay-200">e</span>
        <span className="inline-block animate-bounce delay-300">a</span>
        <span className="inline-block animate-bounce delay-400">t</span>
        <span className="inline-block animate-bounce delay-500">i</span>
        <span className="inline-block animate-bounce delay-600">n</span>
        <span className="inline-block animate-bounce delay-700">g</span>
        <span className="ml-2 text-purple-400">✨</span>
      </div>
    </div>
  </div>
);

export default Loader;

import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="card-hover glass-dark rounded-3xl group relative overflow-hidden">
    {/* Main Image */}
    <div className="relative">
      <img
        className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
        src={photo}
        alt={prompt}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
    </div>

    {/* Hover Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
      {/* Prompt Text */}
      <div className="glass-dark p-4 rounded-2xl mb-4 backdrop-blur-xl">
        <p className="text-white text-sm leading-relaxed prompt max-h-24 overflow-y-auto">
          {prompt}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        {/* Artist Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75"></div>
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex justify-center items-center text-white text-sm font-bold neon-glow">
              {name[0]?.toUpperCase()}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{name}</p>
            <p className="text-white/60 text-xs">Artist</p>
          </div>
        </div>

        {/* Download Button */}
        <button 
          type="button" 
          onClick={() => downloadImage(_id, photo)} 
          className="glass-dark p-3 rounded-full hover:scale-110 transition-all duration-300 group/btn neon-glow"
          title="Download Masterpiece"
        >
          <img 
            src={download} 
            alt="download" 
            className="w-5 h-5 object-contain invert group-hover/btn:scale-110 transition-transform duration-300" 
          />
        </button>
      </div>
    </div>

    {/* Floating Badge */}
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
      <div className="glass-dark px-3 py-1 rounded-full text-xs text-white/80 backdrop-blur-xl">
        ✨ AI Generated
      </div>
    </div>

    {/* Sparkle Effects */}
    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
      <div className="text-yellow-300 text-sm animate-pulse">✨</div>
    </div>
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500">
      <div className="text-pink-300 text-sm animate-pulse">🌟</div>
    </div>
  </div>
);

export default Card;

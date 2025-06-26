import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className="space-y-3">
    {labelName && (
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-white/90 tracking-wide"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="btn-animated glass px-4 py-2 rounded-full text-xs font-semibold text-white/80 hover:text-white neon-glow transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              <span className="text-yellow-400 group-hover:animate-spin">🎲</span>
              Surprise Me
            </span>
          </button>
        )}
      </div>
    )}
    
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
      <input
        type={type}
        id={name}
        name={name}
        className="relative w-full glass-dark text-white placeholder-white/50 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
    </div>
  </div>
);

export default FormField;

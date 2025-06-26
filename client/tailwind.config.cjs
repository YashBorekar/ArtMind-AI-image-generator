/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
        'neon-glow': '0 0 20px rgba(102, 105, 255, 0.5), 0 0 40px rgba(102, 105, 255, 0.3), 0 0 60px rgba(102, 105, 255, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 20s infinite linear',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'sparkle': 'sparkle 2s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(30px) rotate(240deg)' },
          '100%': { transform: 'translateY(0px) rotate(360deg)' },
        },
        glow: {
          'from': { 'box-shadow': '0 0 20px rgba(102, 105, 255, 0.5)' },
          'to': { 'box-shadow': '0 0 30px rgba(102, 105, 255, 0.8)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%': { 'box-shadow': '0 0 0 0 rgba(102, 105, 255, 0.7)' },
          '70%': { 'box-shadow': '0 0 0 10px rgba(102, 105, 255, 0)' },
          '100%': { 'box-shadow': '0 0 0 0 rgba(102, 105, 255, 0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};


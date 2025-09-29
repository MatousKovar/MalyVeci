/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
      extend: {
        colors: {
          'band-black': '#171717',
          'band-red': '#D90000',
          'band-yellow': '#FFD700'
        },
        fontFamily: {
          'orbitron': ['Orbitron', 'sans-serif']
        },
        keyframes: {
          glow: {
            "0%, 100%": {boxShadow: "0 0 10px #D90000, 0 0 20px #D90000" },
            "50%": { boxShadow: "0 0 25px #FF0000, 0 0 40px #FF0000" },
          },
        },
        animation: {
          glow: "glow 2s ease-in-out infinite",
        },
      },
    },  
    plugins: [
    ],
    safelist: [
    ],
  }
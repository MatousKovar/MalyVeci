/** @type {import('tailwindcss').Config} */
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
    plugins: [],
    safelist: [
      "text-stroke-2",
      "text-stroke-3",
      "text-stroke-4",
      "sm:text-stroke-2",
      "sm:text-stroke-3",
      "sm:text-stroke-4",
      "md:text-stroke-2",
      "md:text-stroke-3",
      "md:text-stroke-4",
      "lg:text-stroke-2",
      "lg:text-stroke-3",
      "lg:text-stroke-4",
      "lg:text-stroke-8",
    ],
  }
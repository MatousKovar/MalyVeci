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
          'band-red': '#e00a0a',
          'band-yellow': '#FFD700'
        },
        fontFamily: {
          'orbitron': ['Orbitron', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
  
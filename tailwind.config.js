/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'space-black': '#1A1A2E',
        'cosmic-purple': '#6B48FF',
        'stellar-blue': '#00D4FF',
        'star-white': '#E6E6FA',
      },
      backgroundImage: {
        'nebula-gradient': 'linear-gradient(135deg, #6B48FF, #00D4FF)',
      },
    },
  },
  plugins: [],
};



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#f4ece1',
        'bg-input-color': '#FFF9F0'
      },
      fontFamily: {
        sans: ['Poppins','sans-serif']
      },
      colors:{
        'light-gray' : '#948C8C'
      }
    },
  },
  plugins: [],
}
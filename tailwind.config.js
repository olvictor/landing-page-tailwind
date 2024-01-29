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
        'bg-input-color': '#FFF9F0',
        'light-gray' : '#948C8C',
        'font-orange': '#FF7E00',
        'heavy-gray': '#2F2F2F'
      },
      fontFamily: {
        sans: ['Poppins','sans-serif']
      },
      animation :{
        'fadeIn':  'fadeIn 1s ease-in-out',
        'slideInTop' : 'slide-in-top .5s ease-in-out'
      }
    },
  },
  plugins: [],
}
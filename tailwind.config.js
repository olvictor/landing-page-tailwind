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
      }
    },
  },
  plugins: [],
}
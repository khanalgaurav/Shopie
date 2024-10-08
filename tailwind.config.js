/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'#db4444'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
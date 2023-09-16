/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/style.css"
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-red': '#950740',
        'custom-red': '#C3073F',
        'custom-dark-red': '#6F2232',
        'custom-black': '#1A1A1D',
        'custom-grey': '#4E4E50',
        'custom-white': '#cbd5e1',
        
      },
    },
  },
  plugins: [],
}


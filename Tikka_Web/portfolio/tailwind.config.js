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
        'custom-blue': '#3b82f6',
        
      },
      height: {
        '120': '30rem',
        "800": "50rem"
      },
      width: {
        '120': '30rem',

      },
      screens: {
        'custom-sm': '1150px',
        "custom-xs": "950px",
        "xs": "580px"
      },
  },
  plugins: [],
}
}

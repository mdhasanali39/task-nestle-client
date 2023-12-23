/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Roboto": "'Roboto Condensed', sans-serif"
      },
      backgroundColor:{
        "primary-bg": "rgb(245,245,245)",
        "action-bg": "rgb(96,91,255)"
      },
      colors:{
        "action-text": "rgb(96,91,255)"
      }
    },
  },
  plugins: [],
}


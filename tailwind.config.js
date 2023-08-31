/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        '3xl':'0rem 0.1rem 0.7rem #0ea5e9'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
const color = require('tailwindcss/colors')
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "light-gray": "hsl(212, 45%, 89%)",
      "grayish-blue": "hsl(220, 15%, 55%)",
      "dark-blue": "hsl(218, 44%, 22%)",
          ...color
    },


    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },

      fontWeight:{
        'normal': 400,
        'bold': 700
      },
    },
    plugins: [],
  }
}


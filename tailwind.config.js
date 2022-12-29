/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        veryPaleCyan: 'hsl(193, 100%, 96%)',
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)'
      },

      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'OpenSans': ['"Open Sans"', 'sans-serif'],
      },

      backgroundImage: {
        desktopBg: "url('../images/bg-hero-desktop.svg')",
        mobileBg: "url('../images/bg-hero-mobile.svg')",
      },

      boxShadow: {
        'shad': '50px 50px 100px #c3c3c3, -50px -50px 100px #fdfdfd',
        'shaDow': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'boxShad': '0 3px 10px rgb(0 0 0 / 0.2)'
      }
    },
  },
  plugins: [],
}

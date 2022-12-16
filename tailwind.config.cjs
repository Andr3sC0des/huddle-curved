/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-pink" : "hsl(322, 100%, 66%)",
        "custom-light-pink" : "hsl(321, 100%, 78%)",
        "custom-light-red" : "hsl(0, 100%, 63%)",
        "custom-very-dark-cyan" : "hsl(192, 100%, 9%)",
        "custom-very-pale-blue" : "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        "custom-opensans" : "'Open Sans', sans-serif",
        "custom-poppins" : "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
}

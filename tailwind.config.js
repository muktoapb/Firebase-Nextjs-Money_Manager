/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'SourceSansPro':[ 'Source Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}

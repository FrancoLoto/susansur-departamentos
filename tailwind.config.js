/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primario": "#f9ebd7",
        "secundario": "#D6A469",
        "terciario": "#0E0802",
      },
      fontFamily: {
        logo: ['Great Vibes', 'cursive'],
        principal: ['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}


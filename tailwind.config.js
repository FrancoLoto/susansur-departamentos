/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'fade-in': 'fade-in 2s'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'fade-in': {
          '0%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '1000%'
          }
        }
      },
      colors: {
        "primario": "#f9ebd7",
        "secundario": "#D6A469",
        "terciario": "#0E0802",
        "cuarto": "#D59E60",
        "quinto": "#5D4B37",
        "sexto": "#504437",
      },
      fontFamily: {
        logo: ['Great Vibes', 'cursive'],
        principal: ['Bebas Neue', 'sans-serif'],
        secundaria: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/cal.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ['Space Mono']
      },
        colors: {
          secondary: {
            100: 'hsl(183, 100%, 15%)',
          },
          primary: {
            100: 'hsl(172, 67%, 45%)',
            50: 'hsl(183, 78%, 25%)',
            10:'hsl(189, 41%, 97%)'
          }
        }
    },
  },
  plugins: [],
}

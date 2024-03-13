/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {


    extend: {
      colors: {
        primary: '#4782B4',
        secondary: '#804080',
        azure: '#2a9d8f',
        golden: '#e9c46a',
        offwhite: '#FAF9F6',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
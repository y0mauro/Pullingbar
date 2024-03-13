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
        primary: '#06CB7B',
        secondary: '#0E172A',
        dark: '#1F293B',
        azure: '#2a9d8f',
        golden: '#e9c46a',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
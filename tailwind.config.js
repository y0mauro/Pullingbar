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
        primary: '#16803D',
        primary2: '#06CB7B',
        dark: '#1C1C1C',
        dark2: '#161616',
        graydark: "#343434",
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
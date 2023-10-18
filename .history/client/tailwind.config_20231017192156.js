/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Extend or override the default theme
    extend: {
      fontFamily: {
        cursive: ['cursive'],
      },
    },
  },
  plugins: [],
}
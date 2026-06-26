/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 YEH ADD KIYA
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
  sans: ['Inter', 'sans-serif'],
  serif: ['Playfair Display', 'serif'],
}
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Aqui definimos que `font-sans` vai usar a sua variável poppins
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        candy: {
          pink: "#FFB7C5",
          darkPink: "#FF69B4",
          cream: "#FFFDD0",
          chocolate: "#3D1C02",
        }
      }
    },
  },
  plugins: [],
}

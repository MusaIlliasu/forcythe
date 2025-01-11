/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030516",
        secondary: "#1f3449",
        accent: "#60a6e7",
        "linear-bg-1": "rgba(12,38,69,0)",
        "linear-bg-2": "rgba(7,22,38,0)",
        "dark-gray": "#aea9b1",
        "light-gray": "#e6e0e9"
      }
    },
  },
  plugins: [],
}
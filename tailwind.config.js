/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        gold: "#C5A059",
        muted: "#F4F4F4",
      },
      fontFamily: {
        serif: ["Playfair Display", "Merriweather", "serif"],
        sans: ["Open Sans", "Roboto", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

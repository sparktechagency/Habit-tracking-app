/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-300": ["montserrat-300"],
        "montserrat-400": ["montserrat-400"],
        "montserrat-500": ["montserrat-500"],
        "montserrat-600": ["montserrat-600"],
        "montserrat-700": ["montserrat-700"],
        "montserrat-800": ["montserrat-800"],
      },
      colors: {
        yellowGreen: "#D6DF22",
        blackish: "#3E3E3F",
        gray: "#BCBDC0",
      },
    },
  },
  plugins: [],
};

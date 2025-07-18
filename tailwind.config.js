/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   "inter-400": ["InterRegular"],
      //   "inter-500": ["InterMedium"],
      //   "inter-600": ["InterSemiBold"],
      //   "inter-700": ["InterBold"],
      //   "inter-800": ["InterExtraBold"],
      //   "inter-900": ["InterBlack"],
      //   "rubik-700": ["RubikBold"],
      //   "rubik-800": ["RubikExtraBold"],
      // },
      colors: {
        yellowGreen: "#D6DF22",
        balckish: "#3E3E3F",
        gray: "#BCBDC0",
      },
    },
  },
  plugins: [],
};

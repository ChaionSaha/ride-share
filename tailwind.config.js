/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED1B24",
        secondary: "#F6EEFE",
        "secondary-dark": "#F3F6FF",
        "base-100": "#fff",
        "base-200": "#2F2E41",
      },
      fontFamily: {
        manrope: ['"Manrope", "sans-serif"'],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          primary: "#ED1B24",
          secondary: "#F6EEFE",
          "base-100": "#fff",
          "base-200": "#2F2E41",
        },
      },
    }),
  ],
  darkMode: "class",
};

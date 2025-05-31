/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          soft: "#84D187",
          DEFAULT: "#00B207",
          hard: "#2C742F",
        },
        warning: "#FFBA00",
        danger: "#EA4B48",

        gray: {
          900: "#1A1A1A",
          800: "#333333",
          700: "#4D4D4D",
          600: "#666666",
          500: "#808080",
          400: "#999999",
          300: "#B3B3B3",
          200: "#cccccc",
          100: "#E6E6E6",
          50: "#F2F2F2",
        },

        greenGray: {
          900: "#002603",
          800: "#173B1A",
          700: "#2B572E",
          600: "#406B42",
          500: "#618062",
          400: "#7A997C",
          300: "#96B297",
          200: "#B4CCB4",
          100: "##DAE5DA",
          50: "##EDF2EE",
        },
      },
    },
  },
  plugins: [],
};

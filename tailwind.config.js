/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        "sidebar-dark": "#32363a",
        "sidebar": "#393d42",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

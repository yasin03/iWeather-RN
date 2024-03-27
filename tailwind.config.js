/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blueLight: "#8FB2F5",
      gray: {
        100: "#FAFAFA",
        200: "#BFBFD4 ",
        300: "#ABABC4",
        400: "#7F7F98",
        500: "#3B3B54",
        600: "#22222F",
        700: "#1C1C27",
        800: "#16161F",
        900: "#13131a",
      },
      // ...
    },
  },
  plugins: [],
};

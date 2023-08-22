/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: "Kanit, sans-serif",
      secondary: "Tektur, cursive",
    },

    extend: {
      height: {
        screen: "100dvh",
      },
      boxShadow: {
        behindImage: "0px 0px 100px",
      },
      colors: {
        customred: "#9C0505",
      },
    },
  },
  plugins: [],
};

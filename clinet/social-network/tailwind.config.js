/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        bgBtnColor: "hsla(0, 2%, 13%, 0.948)",
        btnColor: "#AAAAAA"
      },
    },
  },
  plugins: [],
};

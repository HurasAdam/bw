/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(18, 43, 72)",
        "tag-light": "rgb(79, 143, 191)",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};

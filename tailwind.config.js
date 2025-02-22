/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(min-width: 500px) and (max-height: 900px)" },
        mobile: "500px",
        smallmob: "400px",
        bgs: { max: "500px" },
        smaller: { max: "400px" },
        tab: "890px",
        largest: "1736px",
      },
    },
  },
  plugins: [],
};

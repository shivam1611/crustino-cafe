/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomatoRed: "var(--tomato-red)",
        olive: "var(--olive)",
        creamWhite: "var(--cream-white)",
        charcoalGray: "var(--charcoal-gray)",
        accentGoldenYellow: "var(--accent-golden-yellow)",
        woodBrown: "var(--wood-brown)",
      },
      fontFamily: {
        fontHead: "var(--main-font)",
        fontBody: "var(--body-font)",
      },
    },
  },
  plugins: [],
};

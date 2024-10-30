/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#2577FF",
        primary: "#FFFFFF",
        secondary: "#1D1F16",
        btnColor: "#D6FF2F",
      },
    },
  },
  plugins: [],
};

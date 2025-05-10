/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        transrobotics: ['SF TransRobotics', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        bebasneue: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

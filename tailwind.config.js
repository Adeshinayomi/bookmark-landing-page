/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Blue600: "hsl(231, 69%, 60%)",
        Red400: "hsl(0, 94%, 66%)",
        Grey50: "hsl(0, 0%, 97%)",
        Blue950: "hsl(229, 31%, 21%)"
      },
      fontFamily:{
        rubik:["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}

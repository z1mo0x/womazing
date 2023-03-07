/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xl: { max: "1250px" },
      lg: { max: "1100px" },
      md: { max: "826px" },
      sm: { max: "578px" }
    },

    extend: {},
  },
  plugins: [],
}

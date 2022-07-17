module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}", "./src/**/*.js", "./pages/dashboard/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'transparent-black': '#0000009a',
        'heading': '#ffffff',
        'subTitles': '#c8c8c8 ',
        'contentText': '#969696',
      },
    },

  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['DM Serif Display'],
        'display': ['Shrikhand'],
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],

}



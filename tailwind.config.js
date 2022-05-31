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
      },
      backgroundImage: {
        'fond-footer': "url('src/assets/fond_footer.svg')",

      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],

}



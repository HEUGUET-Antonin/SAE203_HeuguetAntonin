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
        'fond-footer-sm': "url('src/assets/fond_footer-sm.svg')",
        'fond-footer-lg': "url('src/assets/fond_footer-lg.svg')",
        'fond-footer-xl': "url('src/assets/fond_footer-xl.svg')",


      },

      space: {
        'xl': "800px"
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],

}



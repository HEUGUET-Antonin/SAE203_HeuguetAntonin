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
        'fond-footer': "url('/fond_footer.svg')",
        'fond-footer-sm': "url('/fond_footer-sm.svg')",
        'fond-footer-lg': "url('/fond_footer-lg.svg')",
        'fond-footer-xl': "url('/fond_footer-xl.svg')",


      },

      gap: {
        'xl': "500px",

      },
      strokeWidth: {
        '4': '4px',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],

}



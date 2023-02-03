configCss = require('./src/styles/configcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: configCss.colors.green,
        black: configCss.colors.black,
        greenlight: configCss.colors.greenlight,
        gray: configCss.colors.gray,
        graylight: configCss.colors.graylight,
        bg: configCss.colors.bg
      },
      backgroundImage: {
        backicon: configCss.backgroundImg.backicon
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
};

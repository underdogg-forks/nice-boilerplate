const tailwind = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...tailwind.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    // Uncomment this line to use powerful theming! Check your theme.config.js.
    // Order is important if you want to use the two plugins in combination.
    // require('./theme.config'),

    // Uses a new color palette and extended configuration, made for
    // Tailwind UI.
    require('@tailwindcss/ui'),
  ],
};

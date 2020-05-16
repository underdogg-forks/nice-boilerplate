const tailwind = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.php', // `/app` by default, but this boierlplate uses `/src`
    './resources/**/*.html',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.ts',
    './resources/**/*.tsx',
    './resources/**/*.php',
    './resources/**/*.vue',
  ],
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
    require('tailwindcss-theming')({
      // Remove the preset and start using your own palette when you're ready.
      // See: https://github.com/hawezo/tailwindcss-theming/blob/master/docs/themes.md#configuring-your-themes
      preset: 'tailwind-vanilla',
    }),

    // Uses a new color palette and extended configuration, made for
    // Tailwind UI.
    require('@tailwindcss/ui'),
  ],
};

/*
 |--------------------------------------------------------------------------
 | PostCSS configuration
 |--------------------------------------------------------------------------
 |
 | You can configure PostCSS and adds plugins in this
 | configuration file.
 |
 */

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.php', // `/app` by default, but this setup uses `/src`
    './resources/**/*.html',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.ts',
    './resources/**/*.tsx',
    './resources/**/*.php',
    './resources/**/*.vue',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-font-magician'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};

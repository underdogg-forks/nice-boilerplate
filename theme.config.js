/*
|--------------------------------------------------------------------------
| This is your theming configuration.
|--------------------------------------------------------------------------
| 
| Create themes with interchangeable colors, and swap them at run-time
| depending on user preferences.
|
| https://github.com/innocenzi/tailwindcss-theming
|
*/

const { ThemeManager, Theme } = require('tailwindcss-theming/api');

// Creates a light theme.
const light = new Theme().setName('light').targetable().addColors({
  // Brand colors
  brand: '#2196f3',
  'on-brand': '#f9fafb',

  // Background colors, but not limited to `bg` utilities.
  background: '#e5e7eb',
  surface: '#f4f5f7',
  'on-background': '#161e2e',
  'on-surface': '#161e2e',

  // Event colors.
  error: '#f05252',
  'on-error': '#f9fafb',
  success: '#3ab577',
  'on-success': '#f9fafb',
  warning: '#ff5a1f',
  'on-warning': '#f9fafb',
  info: '#3f83f8',
  'on-info': '#f9fafb',
});

// Creates a dark theme.
const dark = new Theme().setName('dark').targetable().addColors({
  // Brand colors
  brand: '#2196f3',
  'on-brand': '#f9fafb',

  // Background colors, but not limited to `bg` utilities.
  background: '#161e2e',
  surface: '#161e2e',
  'on-background': '#f9fafb',
  'on-surface': '#f9fafb',

  // Event colors.
  error: '#f05252',
  'on-error': '#f9fafb',
  success: '#3ab577',
  'on-success': '#f9fafb',
  warning: '#ff5a1f',
  'on-warning': '#f9fafb',
  info: '#3f83f8',
  'on-info': '#f9fafb',
});

// Exports the configuration, with the light theme
// set as the default and the dark one set for the
// `dark` option of `prefers-color-scheme`.
module.exports = new ThemeManager().setDefaultTheme(light).setDefaultDarkTheme(dark);

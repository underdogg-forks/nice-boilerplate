const { ThemeBuilder, Theme } = require('tailwindcss-theming');

const lightTheme = new Theme()
  .name('light')
  .default()
  .assignable()
  .colors({
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

const darkTheme = new Theme().name('dark').colors({
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
module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(lightTheme)
  .dark(darkTheme);

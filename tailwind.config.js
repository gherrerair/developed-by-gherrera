const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
        mono: ['Hack', ...defaultTheme.fontFamily.mono],
        heading: ['Merriweather']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};

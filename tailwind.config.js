const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        display: [
          "Noto Sans Thai",
          "Noto Sans",
          "Inter var",
          "SF Pro Display",
          "Sukhumvit Set",
          "Kanit",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}

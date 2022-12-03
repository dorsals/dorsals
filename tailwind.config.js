/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sticker: {
          yellow: '#fffd2f',
          green: '#04c81e',
          blue: '#1b7cff',
          red: '#f43737'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

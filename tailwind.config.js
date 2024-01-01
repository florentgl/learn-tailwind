/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    colors: {
      'color1': '#151515',
      'color2': '#4EE1A0',
      'color3': '#242424',
      'color4': '#D9D9D9'
    },

    fontFamily: {
      'primary': "SpaceGrotesk"
    },

    fontSize: {
      'typo-xl': '88px',
      'typo-l': '48px',
      'typo-m': '24px',
      'typo': '18px'
    },
  }
  // ...
}


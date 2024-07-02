/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../*.{html,js}"
  ],
  theme: {
    
    extend: {
      colors: {
        'indigrey': {
          50: '#cdd6f4',
          100: '#bac2de',
          200: '#a6adc8',
          300: '#9399b2',
          400: '#7f849c',
          500: '#6c7086',
          600: '#585b70',
          700: '#45475a',
          800: '#313244',
          900: '#1e1e2e',
          1000: '#181825',
          1100: '#11111b',
        },
        'brand': {
          50: '#f0f3fe',
          100: '#dce4fd',
          200: '#c2d1fb',
          300: '#97b3f9',
          400: '#668cf4',
          500: '#4365ee',
          600: '#2d45e3',
          700: '#2533d0',
          800: '#242ba9',
          900: '#222a86',
          950: '#1e2160',
      },
      },

      fontSize: {
        sm: '15px',
        base: '18px',
        lg: '27px',
        xl: '36px',
        '2xl': '45px',
        '3xl': '54px',
        '4xl': '72px',
        '5xl': '90px',
      }

    },
  },
  plugins: [],
}


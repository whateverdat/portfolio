/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max':'576px'},
      'md': {'max':'960px'},
      'lg': {'max':'1440px'},
    },
    extend: {
      keyframes: {
        in: {
          '0%': {opacity: 0},
          '100%': {opacity: 1, display: 'block'},
        },
        out: {
          '0%': {opacity: 1},
          '100%': {opacity: 0, display: 'none'},
        },
      },
      animation: {
        in: 'in 0.5s',
        out: 'out 0.5s',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'slate': {
        900: '#0f172a',
        800: '#1e293b',
        700: '#334155',
        400: '#94a3b8',
      },
      'gray': {
        900: '#111827',
        800: '#1f2937',
        700: '#374151',
      },
      'white': '#FFF'
    },
  },
  plugins: [],
}

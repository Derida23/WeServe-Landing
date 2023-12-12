import type { Config } from 'tailwindcss'

const colors = {
  main: {
    DEFAULT: '#9B442A',
    30: '#FFFBFF',
    40: '#D8C2BC',
    50: '#FFEDE8',
    100: '#FFB5A0',
    200: '#FB8D6F',
    300: '#DA7457',
    400: '#BB5B40',
    500: '#9B442A',
    600: '#7C2D16',
    700: '#5E1703',
    800: '#3B0900',
  },
} as const

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // default font
        serif: ['Kalnia']
      },
    },
  },
}

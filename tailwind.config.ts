import type { Config } from 'tailwindcss'

const colors = {
  hanPurple: '#640EF1',
  cetaceanBlue: '#080C2E',
  coolGray: '#8D90A8',
  electricBlue: '#5D5D7C',
  beerOrange: '#FF961A',
  flashWhite: '#F1F4F5',
  americanBlue: '#424560',
  richBlack: '#070C29',
  carminePink: '#FF3232',
  mustard: '#FFD15A',
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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2550px',
    }
  },
}

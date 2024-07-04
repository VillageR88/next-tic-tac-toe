import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        evenSmallerScreen: '240px',
        verySmallScreen: '360px',
        tablet: '700px',
        screen1200: '1200px',
        screenInBetween: '1024px',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        almostWhite: '#E6E5EA',
        neonGreen: '#A4FFAF',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;

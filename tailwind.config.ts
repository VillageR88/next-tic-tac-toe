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
        silver: '#A8BFC9',
        silverHover: '#DBE8ED',
        silverOuterShadow: '#6B8997',
        semiDarkNavy: '#1F3641',
        semiDarkNavyOuterShadow: '#10212A',
        darkNavy: '#1A2A33',
        lightBlue: '#31C3BD',
        lightBlueHover: '#65E9E4',
        lightYellow: '#F2B137',
        lightYellowHover: '#FFC860',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;

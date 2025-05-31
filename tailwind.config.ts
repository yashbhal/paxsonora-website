import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Semantic color palette using CSS variables
      // These will be defined in globals.css
      'transparent': 'transparent',
      'current': 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      // PaxSonora Theme Colors
      'background': 'rgb(var(--pax-background))',
      'foreground': 'rgb(var(--pax-foreground))',
      'primary': 'rgb(var(--pax-primary))',
      'primary-foreground': 'rgb(var(--pax-primary-foreground))',
      'muted': 'rgb(var(--pax-muted))',
      'muted-foreground': 'rgb(var(--pax-muted-foreground))',
      'accent': 'rgb(var(--pax-accent))',
      'accent-foreground': 'rgb(var(--pax-accent-foreground))',
      'card': 'rgb(var(--pax-card))',
      'card-foreground': 'rgb(var(--pax-card-foreground))',
      'gradient-start': 'rgb(var(--pax-gradient-start))',
      'gradient-end': 'rgb(var(--pax-gradient-end))',
      'orb-inner-start': 'rgb(var(--pax-orb-inner-start))',
      'orb-inner-end': 'rgb(var(--pax-orb-inner-end))',
      'orb-outer': 'rgb(var(--pax-orb-outer))',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        // display: ['"Playfair Display"', 'serif'], // Example, ensure font is available
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'xlarge': '1.5rem', // For the button
      }
    },
  },
  plugins: [],
};
export default config;

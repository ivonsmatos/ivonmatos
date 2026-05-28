import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#00010D',
        graphite: '#626B73',
        bronze: '#C2926C',
        mist: '#C5D0D9',
        paper: '#F2F2F2',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(.2, .8, .2, 1)',
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(.2,.8,.2,1) forwards',
        shimmer: 'shimmer 8s linear infinite',
        'pulse-dot': 'pulse-dot 2.4s cubic-bezier(.2,.8,.2,1) infinite',
        'scroll-cue': 'scroll-cue 1.8s cubic-bezier(.2,.8,.2,1) infinite',
        marquee: 'marquee 38s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { 'background-position': '0% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        'pulse-dot': {
          '0%':   { 'box-shadow': '0 0 0 0 rgba(22, 199, 132, .55)' },
          '70%':  { 'box-shadow': '0 0 0 10px rgba(22, 199, 132, 0)' },
          '100%': { 'box-shadow': '0 0 0 0 rgba(22, 199, 132, 0)' },
        },
        'scroll-cue': {
          '0%':   { transform: 'translateY(-8px)', opacity: '0' },
          '50%':  { opacity: '1' },
          '100%': { transform: 'translateY(8px)',  opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)',     opacity: '0.7' },
          '33%':      { transform: 'translate3d(2%,-3%,0) scale(1.08)', opacity: '0.9' },
          '66%':      { transform: 'translate3d(-2%,2%,0) scale(1.04)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

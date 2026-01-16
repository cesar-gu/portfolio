/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c1d9ff',
          300: '#a2c6ff',
          400: '#0066cc',
          500: '#0052a3',
          600: '#003d7a',
          700: '#002e5c',
          800: '#001f3d',
          900: '#001a33',
        },
        accent: {
          orange: '#ff9500',
          green: '#10b981',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'morph-pulse': 'morphPulse 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        morphPulse: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '40% 60% 70% 30% / 50% 40% 60% 50%' },
          '50%': { borderRadius: '30% 70% 40% 60% / 40% 60% 40% 50%' },
          '75%': { borderRadius: '70% 30% 60% 40% / 60% 50% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
      },
    },
  },
  plugins: [],
};

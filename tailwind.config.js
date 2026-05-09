/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020810',
          900: '#050d1e',
          800: '#0a1628',
          700: '#0d1f40',
          600: '#0d2255',
          500: '#0f2d6e',
          400: '#1a3a8a',
        },
        brand: {
          600: '#1a4f9c',
          500: '#1e6fbc',
          400: '#2d87d8',
          300: '#48b9f7',
          200: '#7ee8fa',
          100: '#c8f0ff',
        },
        cyan: {
          DEFAULT: '#00d4ff',
          dim: 'rgba(0,212,255,0.12)',
          glow: 'rgba(0,212,255,0.25)',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #020810 0%, #050d1e 40%, #0d2255 75%, #0a1628 100%)',
        'gradient-card': 'linear-gradient(145deg, #0d2255, #0a1628)',
        'gradient-accent': 'linear-gradient(135deg, #00d4ff, #1e6fbc)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '52px 52px',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(0,212,255,0.2)',
        'glow-blue': '0 0 40px rgba(30,111,188,0.2)',
        'card': '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(30,111,188,0.2)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.35)',
        'nav': '0 4px 32px rgba(0,0,0,0.5)',
        'btn': '0 4px 20px rgba(0,212,255,0.3)',
        'btn-hover': '0 8px 32px rgba(0,212,255,0.45)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both',
        'fade-up-1': 'fadeUp 0.7s 0.1s cubic-bezier(0.4,0,0.2,1) both',
        'fade-up-2': 'fadeUp 0.7s 0.2s cubic-bezier(0.4,0,0.2,1) both',
        'fade-up-3': 'fadeUp 0.7s 0.3s cubic-bezier(0.4,0,0.2,1) both',
        'fade-up-4': 'fadeUp 0.7s 0.4s cubic-bezier(0.4,0,0.2,1) both',
        'blink': 'blink 1.2s step-end infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}

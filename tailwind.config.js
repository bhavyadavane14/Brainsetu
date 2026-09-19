/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: '#0E3B6E',
            deep: '#0B2545',
            light: '#1D4ED8',
            subtle: '#EEF4FF',
          },
          secondary: {
            DEFAULT: '#0891B2',
            teal: '#0D9488',
            cyan: '#06B6D4',
            light: '#ECFEFF',
          },
          accent: {
            DEFAULT: '#F97316',
            amber: '#F59E0B',
            warm: '#EA580C',
            light: '#FFFBEB',
          },
          navy: {
            900: '#0A1128',
            800: '#0F172A',
            700: '#1E293B',
            600: '#334155',
          },
          slate: {
            muted: '#64748B',
            border: '#E2E8F0',
            bg: '#F8FAFC',
            bluebg: '#F0F9FF',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 59, 110, 0.08)',
        'card': '0 10px 30px -4px rgba(11, 37, 69, 0.08), 0 4px 10px -2px rgba(11, 37, 69, 0.03)',
        'card-hover': '0 20px 40px -6px rgba(14, 59, 110, 0.16), 0 8px 16px -4px rgba(6, 182, 212, 0.12)',
        'glow': '0 0 25px rgba(6, 182, 212, 0.35)',
        'glow-accent': '0 0 25px rgba(249, 115, 22, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-slow': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

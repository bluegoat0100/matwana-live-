/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          DEFAULT: '#38bdf8',
          dark: '#0ea5e9',
          light: '#7dd3fc',
        },
        ink: {
          DEFAULT: '#0f172a',
          soft: '#1e293b',
          muted: '#64748b',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
        'card-hover': '0 8px 30px rgba(15,23,42,0.10), 0 2px 6px rgba(15,23,42,0.06)',
        'glow': '0 0 24px rgba(56, 189, 248, 0.35)',
      },
    },
  },
  plugins: [],
};

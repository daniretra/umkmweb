/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'olive': {
          50: '#f7f8f5',
          100: '#eef0e8',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
        },
        'navy': {
          600: '#1e3a8a',
          700: '#1e40af',
          800: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1c1c22',
        'bg-2': '#24242c',
        card: '#2a2a32',
        text: '#f3f1f5',
        muted: '#a8a4b0',
        lavender: '#c4b5e0',
        'lavender-deep': '#a78bc9',
        line: '#3a3a42',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

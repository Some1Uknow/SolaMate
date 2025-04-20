/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 10s infinite linear',
        scaleUp: 'scaleUp 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0)',
            opacity: '0'
          },
          '50%': {
            opacity: '0.3'
          },
          '100%': {
            transform: 'translateY(-100px) translateX(100px)',
            opacity: '0'
          },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

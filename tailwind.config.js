/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5A00',
          hover: '#E04E00',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          border: '#333333'
        },
      },
      fontFamily: {
        sans: ['Kallisto', 'sans-serif'],
        display: ['Termina', 'sans-serif'],
        accent: ['Magistral', 'serif'],
      },
      boxShadow: {
        'primary-glow': '0 8px 24px rgba(255, 90, 0, 0.4)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}

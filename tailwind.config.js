/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tidb: {
          start: '#0F172A', // Slate 900
          end: '#020617',   // Slate 950
          accent: '#06b6d4', // Cyan 500
          glow: '#8b5cf6',   // Violet 500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-slide-blur': 'fadeSlideBlurIn 1s ease-out both',
        'drift-right': 'driftRight 12s linear infinite',
        'drift-left': 'driftLeft 12s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeSlideBlurIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(40px)', 
            filter: 'blur(10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)', 
            filter: 'blur(0)' 
          },
        },
        driftRight: {
          '0%': { transform: 'translateX(-20%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.08' },
          '90%': { opacity: '0.08' },
          '100%': { transform: 'translateX(120vw) rotate(180deg)', opacity: '0' },
        },
        driftLeft: {
          '0%': { transform: 'translateX(120vw) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.08' },
          '90%': { opacity: '0.08' },
          '100%': { transform: 'translateX(-20%) rotate(-180deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

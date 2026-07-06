/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        owncart: {
          ink: "#20261f",
          forest: "#2E4034",
          "forest-dark": "#1B2620",
          mango: "#F4A340",
          clay: "#E85D4C",
          sage: "#8AA399",
          cream: "#FBF7EF",
          paper: "#FFFFFF",
          line: "rgba(32,38,31,0.1)",
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      boxShadow: {
        owncart: "0 20px 50px -20px rgba(27,38,32,0.35)",
      },
      borderRadius: {
        owncart: "18px",
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        'float-slow': 'float1 5s ease-in-out infinite',
        'float-delayed': 'float2 5s ease-in-out infinite 1.5s',
      }
    },
  },
  plugins: [],
}

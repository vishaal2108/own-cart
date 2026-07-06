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
          // Primary Brand Colors from color-code.md
          primary: "#FF6557",
          secondary: "#FF4E67",
          accent: "#F70A6B",
          hover: "#E60063",
          light: "#FF8A72",

          // Backgrounds & Surfaces
          bg: "#FAFAFC",
          surface: "#FFFFFF",
          "surface-alt": "#FFF8FA",
          "surface-hover": "#FFF5F7",
          "soft-pink": "#FFF4F7",

          // Typography
          heading: "#202124",
          text: "#5E6472",
          muted: "#9AA0AE",
          disabled: "#C4C8D0",

          // Borders & Highlights
          border: "#ECECEC",
          "border-active": "#FFD2DE",
          gold: "#FFC83D",

          // Seamless legacy token mappings to the new Coral/Pink/Magenta palette
          ink: "#202124",
          forest: "#F70A6B",
          "forest-dark": "#202124",
          mango: "#FFC83D",
          clay: "#FF6557",
          sage: "#FF4E67",
          cream: "#FAFAFC",
          paper: "#FFFFFF",
          line: "#ECECEC",
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      boxShadow: {
        owncart: "0 15px 35px rgba(0,0,0,0.10)",
        sm: "0 5px 20px rgba(0,0,0,0.08)",
        md: "0 15px 35px rgba(0,0,0,0.10)",
        lg: "0 25px 60px rgba(247,10,107,0.18)",
        glow: "0 15px 35px rgba(247,10,107,0.25)",
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6557 0%, #FF4E67 45%, #F70A6B 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #FF775F 0%, #FF5672 45%, #FF1475 100%)',
        'brand-gradient-alt': 'linear-gradient(90deg, #FF6557, #FF4E67, #F70A6B)',
        'brand-gradient-soft': 'linear-gradient(135deg, #FF8A72, #FF5D7A, #FF3F8E)',
        'brand-gradient-icon': 'linear-gradient(135deg, #FF6557, #F70A6B)',
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

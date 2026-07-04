/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        accent: "#f59e0b",
        coffee: {
          50: "#faf8f5",
          100: "#f5f1ea",
          200: "#e8ddc9",
          300: "#dbc9a8",
          400: "#c1a166",
          500: "#a67c52",
          600: "#8b5e3c",
          700: "#6f4e31",
          800: "#4a3420",
          900: "#2d1f13",
        },
        cream: {
          50: "#fffefa",
          100: "#fffcf5",
          200: "#fef9eb",
          300: "#fdf5e0",
          400: "#fceeca",
          500: "#fbe7b5",
          600: "#e6d19f",
          700: "#ccb886",
          800: "#b39e6d",
          900: "#99845a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        foreground: "#F5F5FC",
        primary: {
          DEFAULT: "#00FFBB",
          50: "#E2FFF8",
          100: "#C0FFF0",
          200: "#80FFE0",
          300: "#40FFD0",
          400: "#00FFC0",
          500: "#00FFBB",
          600: "#00CC96",
          700: "#009970",
          800: "#00664B",
          900: "#003325",
        },
        secondary: {
          DEFAULT: "#FF3694",
          50: "#FFDBED",
          100: "#FFB8DB",
          200: "#FF70B7",
          300: "#FF3694",
          400: "#E60073",
          500: "#B30059",
          600: "#800040",
          700: "#4D0026",
          800: "#1A000D",
          900: "#000000",
        },
        accent: {
          DEFAULT: "#3694FF",
          50: "#FFFFFF",
          100: "#F5F9FF",
          200: "#C2DDFF",
          300: "#8FC0FF",
          400: "#5DA3FF",
          500: "#3694FF",
          600: "#0374FF",
          700: "#005BD0",
          800: "#00439A",
          900: "#002B63",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        titiliumWeb: ["Titillium Web", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 5px rgba(0, 255, 187, 0.5), 0 0 20px rgba(0, 255, 187, 0.3)",
        "neon-secondary":
          "0 0 5px rgba(255, 54, 148, 0.5), 0 0 20px rgba(255, 54, 148, 0.3)",
        "neon-accent":
          "0 0 5px rgba(54, 148, 255, 0.5), 0 0 20px rgba(54, 148, 255, 0.3)",
      },
      animation: {
        "neon-pulse": "pulse 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

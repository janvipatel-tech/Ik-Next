/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0c1024",
          900: "#0c1024",
          800: "#151a36",
          700: "#1f2547",
        },
        brand: {
          DEFAULT: "#5b34ea",
          50: "#f1edff",
          100: "#e3d9ff",
          200: "#c6b4ff",
          300: "#a98eff",
          400: "#8a63f7",
          500: "#5b34ea",
          600: "#4a25d1",
          700: "#3a1ca6",
        },
        accent: "#19c3a6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(12, 16, 36, 0.18)",
        soft: "0 4px 24px -8px rgba(12, 16, 36, 0.12)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

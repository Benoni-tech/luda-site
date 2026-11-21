import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ndc: {
          red: "#C8102E",
          redDark: "#A50D26",
          green: "#0B7A3B",
          ink: "#111111",
          paper: "#F2F2F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1360px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        growX: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        heroZoom: {
          "0%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        slideInRight: "slideInRight 0.9s ease-out both",
        growX: "growX 1s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

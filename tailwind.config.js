/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        gradient: "gradientBG 8s ease infinite",
        "gradient-shift": "gradientShift 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-in-left": "slideInFromLeft 0.6s ease-out",
        "slide-in-right": "slideInFromRight 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        shimmer: "shimmer 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        gradientShift: {
          "0%, 100%": { "background-position": "0% 0%" },
          "25%": { "background-position": "100% 0%" },
          "50%": { "background-position": "100% 100%" },
          "75%": { "background-position": "0% 100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { "box-shadow": "0 0 20px rgba(59, 130, 246, 0.5)" },
          "50%": { "box-shadow": "0 0 40px rgba(59, 130, 246, 0.8)" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        neon: "0 0 20px rgba(59, 130, 246, 0.6)",
        purple: "0 10px 40px rgba(139, 92, 246, 0.3)",
        pink: "0 10px 40px rgba(236, 72, 153, 0.3)",
        glow: "0 0 30px rgba(59, 130, 246, 0.4)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        900: "900ms",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // Custom plugin for additional utilities
    function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0,0,0,0.10)",
        },
        ".text-shadow-lg": {
          "text-shadow": "4px 4px 8px rgba(0,0,0,0.12)",
        },
        ".glass": {
          background: "rgba(255, 255, 255, 0.1)",
          "backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        ".glass-dark": {
          background: "rgba(0, 0, 0, 0.1)",
          "backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".gradient-text": {
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".gradient-text-rainbow": {
          background:
            "linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          "background-size": "200% 200%",
        },
        ".hover-lift": {
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            "box-shadow": "0 20px 40px rgba(0, 0, 0, 0.1)",
          },
        },
        ".hover-glow": {
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            "box-shadow": "0 0 30px rgba(59, 130, 246, 0.5)",
          },
        },
        ".focus-ring": {
          "&:focus": {
            outline: "none",
            "box-shadow": "0 0 0 2px rgba(59, 130, 246, 0.5)",
          },
        },
      });

      addComponents({
        ".btn": {
          display: "inline-flex",
          "align-items": "center",
          "justify-content": "center",
          "border-radius": theme("borderRadius.lg"),
          "font-weight": theme("fontWeight.medium"),
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:disabled": {
            opacity: "0.5",
            cursor: "not-allowed",
          },
        },
        ".card": {
          background: theme("colors.white"),
          "border-radius": theme("borderRadius.xl"),
          "box-shadow": theme("boxShadow.lg"),
          padding: theme("spacing.6"),
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            "box-shadow": theme("boxShadow.xl"),
          },
        },
      });
    },
  ],
};

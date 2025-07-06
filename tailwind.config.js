/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "576px", // Extra small
      sm: "640px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Laptop
      xl: "1280px", // Desktop
      xxl: "1536px", // Ultra-wide
    },
    extend: {
      height: {
        'screen-svh': '100svh',
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(0.8)" },
        },
        walk: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
        walkingX: "walk 2s linear infinite",
      },
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
        DancingScript: ['Dancing Script', 'cursive'],
      },
      colors: {
        'charcoal-black': '#1F1F1F ', // fundo geral / Texto secundário
        'graphite-gray': '#3A3A3C', // bordas; HOVERS de botões
        'ice-white': '#F5F5F7', // texto primário
        'matte-golden-beige': '#bb8c4d', // fundo CTA buttons
        'light-gray-blue': '#E1E3E6', // Botões, destaques primários
        'dark-wine-red': '#6A2E2A', // Hover de links e detalhes
      },
    },
  },
  plugins: [],
}
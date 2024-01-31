/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#006fff",
          "secondary": "#0084ff",
          "accent": "#00ffaa",
          "neutral": "#0e140b",
          "base-100": "#f1f5f9",
          "info": "#00e9ff",
          "success": "#00ffc9",
          "warning": "#b98400",
          "error": "#ff5679",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


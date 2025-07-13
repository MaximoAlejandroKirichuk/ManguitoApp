/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
          "Patrick-Regular": ["PatrickHand-Regular", "sans-serif"]
      },

      colors:{
        primary:"##4CAF50",
        secondary: '#FFC107',
        text_primary: '#333333',
        text_secondary: '#757575',
        background:'#FAFAFA',
        error:'#FF6B6B',

      }
    },
  },
  plugins: [],
}
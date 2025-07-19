
import {Colors} from './constants/Color.tsx'
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
        primary: Colors.primary,
        secondary: Colors.secondary,
        text_primary: Colors.text_primary,
        text_secondary: Colors.text_secondary,
        background: Colors.background,
        error: Colors.error,
      }
    },
  },
  plugins: [],
}
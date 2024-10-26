/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'mont': 'Montserrat-Regular',
        'mont-black': 'Montserrat-Black',
        'mont-bold': 'Montserrat-Bold',
        'mont-extrabold': 'Montserrat-ExtraBold',
        'mont-extralight': 'Montserrat-ExtraLight',
        'mont-light': 'Montserrat-Light',
        'mont-medium': 'Montserrat-Medium',
        'mont-semibold': 'Montserrat-SemiBold',
        'mont-thin': 'Montserrat-Thin'
      },
    },
  },
  plugins: [],
}
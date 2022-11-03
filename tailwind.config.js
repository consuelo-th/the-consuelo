/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
    colors: {
      "primary-90":"#163725",
      "primary-70":"#255C3D",
      "primary-60":"#2C6E49",
      "primary-50":"#4F8667",
      "primary-40":"#729E86",
      "primary-10":"#D5E2DB",
      "secondary": "#E5E5E5",
      "text-title": "#050B08",
      "body": "#2F3431",
      "helper": "#595E5B",
      "white": "#FFF",
      "icon":"#6C6F6D",
      "gray-50": "#464646",
      "gray-40": "#585858",
      "error": "#BF5E5E"

    },
    fontFamily: {      
      sans: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')],
}
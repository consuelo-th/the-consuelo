/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      boxShadow:{
        'custom': `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 
        0 -5px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)`
      },
      keyframes:{
        slide:{
          '0%': { 'transform': 'translateY(0%)' },
          '16.6%': { 'transform': 'translateY(-17%)'},
          '33.2%': { 'transform': 'translateY(-34%)'},
          '49.8%': { 'transform': 'translateY(-34%)'},
          '82%': { 'transform': 'translateY(-67%)' },
          '100%': { 'transform': 'translateY(-67%)' }
        },
        fadeOut:{
          '0%': { 'opacity': '1' },
          '100%': 
          {
            'opacity': '0',
            'display': 'none', 
          }
        },
        fadeIn:{
          '0%': { 'opacity': '0', },
          '50%':{ 'opacity': '0.3' },
          '100%': 
          {
            'opacity': '1',
            'height': 'auto'
          }
        },
      },
      animation: {
        'slide': 'slide 4s 1s linear 1 forwards',
        'fadeOut': 'fadeOut 1s 4s linear forwards', 
        'fadeIn': 'fadeIn 2s 4.5s ease-out forwards' 
      }
    },
    colors: {
      "primary-110":"#09160F",
      "primary-100":"#0F2518",
      "primary-90":"#163725",
      "primary-70":"#255C3D",
      "primary-60":"#2C6E49",
      "primary-50":"#4F8667",
      "primary-40":"#729E86",
      "primary-10":"#D5E2DB",
      "secondary": "#E5E5E5",
      "secondary-50": '#FEFEE8',
      "secondary-100": "#55554C",
      "afribook": "#6C6F6D",
      "text-title": "#050B08",
      "body": "#2F3431",
      "helper": "#595E5B",
      "white": "#FFF",
      "icon":"#6C6F6D",
      "gray-50": "#464646",
      "gray-40": "#585858",
      "error": "#BF5E5E",
      "card-border": "#E6F6ED",
      "semantics": "#840B0B",
      "modal": "#667085",
      "black": "#000000",
      "stroke": "rgba(175, 177, 177, 0.1)"

    },
    fontFamily: {      
      sans: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')],
}
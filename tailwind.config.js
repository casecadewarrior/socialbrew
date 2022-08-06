module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'dashboard-item': "url('https://vinepair.com/wp-content/uploads/2015/08/craft-beer-definition-social.jpg')",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
       },
       colors: {
        red: '#d7402a',
        redDark: '#ac3322',
      },
    },
  },
  plugins: [],
}
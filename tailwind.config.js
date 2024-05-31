module.exports = {
  content: [
      "./App.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./screens/*.{js,jsx,ts,tsx}",
      "./navigation/*.{js,jsx,ts,tsx}",
      // "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
      colors: {
          "black-blue" : "#0D1B40",
          "dark-blue" : "#122D71",
          "dark-blue-v2" : "#7097C6",
          "light-blue" : "#AFDEFF",
          "light-blue-v2" : "#DFF2FF",
      }
      },
  },
  plugins: [],
}
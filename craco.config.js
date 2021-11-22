// craco.config.js
const path = require("path")

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/views/components/"),
      '@utils': path.resolve(__dirname, "src/utils/"),
      '@images': path.resolve(__dirname, "src/assets/images/"),
      '@redux': path.resolve(__dirname, "src/redux/")
    }
  }
}

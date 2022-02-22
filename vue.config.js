const px2rem = require('postcss-px2rem');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  lintOnSave: false,
}

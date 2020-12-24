const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(arg => {
        arg[0].title = 'Hidden Story'
        return arg
      })

    config.module
      .rule('svg')
      .uses.clear()
    config.module
      .rule('svg1')
      .test(/\.svg$/)
      .use('svg-sprite')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
      .include
        .add(resolve('src/assets/svg'))
        .end()
  },
  devServer: {
    overlay: {
        warnings: false,
        errors: false
    },
  },
  lintOnSave: false
}
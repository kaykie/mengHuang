// var webpack = require('webpack')
// const UglifyPlugin = require('uglifyjs-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : './',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 5666,
    openPage: '#/',
    before: app => { },
  },
  css: {
    loaderOptions: {
      stylus: {
        // @/ 是 src/ 的别名，想配的话可以alias上配
        import: '~@/assets/style/var.styl',
      },
    },
  },

  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },

  chainWebpack: config => {
    config.module
      .rule('robot')
      .test(/robot\..+\.js$/)
      .use('raw-loader')
      .loader('raw-loader')
      .options({
        esModule: false,
      })
    config.module.rule('js').exclude.add(/robot\..+\.js$/)
  },
}

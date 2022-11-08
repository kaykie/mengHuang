// var webpack = require('webpack')
// const UglifyPlugin = require('uglifyjs-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

let timeStamp = new Date().getTime()
module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV == 'production' ? './' : '/',
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
    extract: { // 打包后css文件名称添加时间戳
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/[name].${timeStamp}.css`,
    },
  },

  configureWebpack: {
    output: { // 输出重构 打包编译后的js文件名称,添加时间戳.
      filename: `js/[name].${timeStamp}.js`,
      chunkFilename: `js/[name].${timeStamp}.js`,
    },
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

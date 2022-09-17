// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    // "postcss-import": {},
    // "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    'postcss-pxtorem': { // yarn add postcss-pxtorem -D "postcss-pxtorem": "^5.1.1",
      rootValue: 100, // 结果为：设计稿元素尺寸750/，比如元素宽32px,最终页面会换算成 2rem 大写Px/PX 不转换浏览器能识别
      minPixelValue: 2,
      propList: ['*'],
    },
  },
}

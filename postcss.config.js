module.exports = {
  plugins: {
    // 兼容浏览器，添加前缀
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions' // 所有主流浏览器最近10版本用
      ],
      grid: true
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 根元素字体大小
      propList: ['*'], // 需要转换的属性列表
      selectorBlackList: ['.ignore', '.van-'], // 排除， ignore 、van-开头的class，不进行rem转换
      minPixelValue: 13 // px小于13的不会被转换
    }
  }
}

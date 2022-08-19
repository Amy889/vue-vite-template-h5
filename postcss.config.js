module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 8"],
    },
    // px转换成rem
    "postcss-pxtorem": {
      // 设计图页面尺寸如果是750就填75
      rootValue: 75,
      unitPrecision: 5,
      propList: ["*"],
      exclude: [/node_modules/],
    },
  },
};

/*
 * @Author: PengKang
 * @Date: 2021-03-11 11:29:08
 * @LastEditors: PengKang
 * @LastEditTime: 2021-03-11 11:29:28
 * @FilePath: \vite-react\postcss.config.js
 */
module.exports = {
  plugins: {

      'postcss-pxtorem': {
          rootValue: 37.5,
          propList: ['*'],
          unitPrecision: 5
      }
  }
}

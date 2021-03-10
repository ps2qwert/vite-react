/*
 * @Author: PengKang
 * @Date: 2021-02-18 17:43:25
 * @LastEditors: PengKang
 * @LastEditTime: 2021-03-10 09:39:26
 * @FilePath: \vite-react\vite.config.js
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import alias from '@rollup/plugin-alias';
import postcss  from 'rollup-plugin-postcss';
import path from 'path';
import pxtorem from 'postcss-pxtorem';
// https://vitejs.dev/config/
export default defineConfig({
  css:{
    postcss:{
      plugins:[
        pxtorem({
          replace: false,
          rootValue: 37.5,
          propList: ['*']  
        })
      ]
    }
  },
  plugins: [
    reactRefresh(),
    // postcss({
    //   config: false,
    //   module: false,
    //   sourceMap: false,
    //   extensions: ['.css', '.less','scss'],
    //   plugins:[
    //     // pxtorem({
    //     //   replace: false,
    //     //   rootValue: 37.5,
    //     //   propList: ['*']  
    //     // })
    //   ]
    // }),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src'), },
      ]
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://***********',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }
})

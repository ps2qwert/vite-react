/*
 * @Author: PengKang
 * @Date: 2021-03-15 14:29:06
 * @LastEditors: PengKang
 * @LastEditTime: 2021-03-22 12:04:27
 * @FilePath: \vite-react\src\pages\CommmonJsEsModule\index.jsx
 */
import React, { useState, Fragment } from 'react'
import { TabBar } from 'antd-mobile';
import data,{age} from './cmd'
console.log('改动前age',age)
age.add()
console.log('改动后age',age)
console.log('data',data)
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <Fragment>
        <code>
          age.x = 3333
        </code>
        <pre>age.add()</pre>
        <pre> age.x = 3334</pre>
        <div >
          通过esModel导入进来。<br></br>
          1、导出的值可以在内部函数改变<br></br> 
          2、函数和变量是可读的，但对象里面的属性是可以被修改的
        </div>
      </Fragment>

    );
  }
}



export default Index
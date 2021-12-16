import React, { useState } from 'react'
import { TabBar } from 'antd-mobile';
import './index.scss'

let bar = {
  name : '1',
  foo(){
    console.log('1',this)
  }
}


class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }

  clone(){
    return this
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscr
        </a>
      </div>
    );
  }

  test(){
    this.render = ()=>{
      return <div>1</div>
    }
    console.log('tab',this)
  }

  render() {
    var x = foo()
    bar.foo()
    this.test()
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }} >
11
      </div>
    );
  }
}

console.log('22',TabBarExample)

var x = new TabBarExample()
console.log('33',x.test(),x.clone())

function foo(){
  return ()=>{
    console.log('this',this)
  }
}

export default TabBarExample
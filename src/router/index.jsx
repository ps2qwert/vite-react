/*
 * @Author: PengKang
 * @Date: 2021-03-08 17:44:31
 * @LastEditors: PengKang
 * @LastEditTime: 2021-03-22 10:42:46
 * @FilePath: \vite-react\src\router\index.jsx
 */
import React, { useState, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { TabBar } from 'antd-mobile';


import Home from '@/pages/home/index'
import Cmd from '@/pages/CommmonJsEsModule/index'


function App(props){
  let history = useHistory();
  let { location : {pathname}} = history
  return (
    <Fragment>
      <Route path='/dashboard'><Dashboard></Dashboard></Route>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="cmd"
          key="cmd"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={pathname === '/about'}
          onPress={() => {
            history.push('/about')
          }}
          data-seed="logId"
        >
          <Route path="/about">
            <Cmd />
          </Route>
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="this"
          key="this"
          selected={pathname === '/'}
          onPress={() => {
            history.push('/')

          }}
          data-seed="logId1"
        >
          <Route exact path="/">
            <Home />
          </Route>
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="Friend"
          key="Friend"
          dot

          onPress={() => {
          }}
        >
          3
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="My"
          key="my"

          onPress={() => {

          }}
        >
          4
        </TabBar.Item>
      </TabBar>
    </Fragment>
  )
}

function Basic() {

  return (
    <Router>
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }} >
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route component={App}></Route>

        </Switch>
      </div>


    </Router>

  )
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default Basic

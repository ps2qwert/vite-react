/*
 * @Author: PengKang
 * @Date: 2021-03-08 17:44:31
 * @LastEditors: PengKang
 * @LastEditTime: 2021-03-09 17:06:36
 * @FilePath: \vite-react\src\router\index.jsx
 */
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Home from '@/pages/home/index'
function Basic() {

  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
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

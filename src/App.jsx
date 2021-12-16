import React, { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Router from './router/index'
import 'antd-mobile/dist/antd-mobile.css'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router></Router>
    </div>
  )
}

export default App

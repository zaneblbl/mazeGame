/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-05 15:07:38
 * @Author: cell
 */

import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'


import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

class index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Login} exact ></Route>
        <Route path='/Home' component={Home}></Route>
      </BrowserRouter>
    )
  }
}

export default index

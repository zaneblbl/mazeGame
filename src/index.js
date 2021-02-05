/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-04 13:52:54
 * @Author: cell
 */
import React from "react";
import ReactDOM from "react-dom";
import Router from './router/index'
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
  rootElement
);

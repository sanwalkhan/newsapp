import "./App.css";
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/news";

export default class App extends Component {
 
  render() {
    let  {mode} = this.props
    return (
      <div>
      <Navbar mode={mode}/>
      <News/>
      </div>
    )
  }
}

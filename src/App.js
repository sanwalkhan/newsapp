import "./App.css";
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/news";

export default class App extends Component {
  // a = "Sanwal"
  render() {
    return (
      <div>
      <Navbar/>
      <News/>
      </div>
    )
  }
}

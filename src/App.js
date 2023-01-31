import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {
  a = "Sanwal"
  render() {
    return (
      <div className="App">App {this.a}</div>
    )
  }
}

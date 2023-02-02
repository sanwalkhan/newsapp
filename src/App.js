import "./App.css";
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/news";
// import Spinner from "./components/Spinner";


export default class App extends Component {
 
  render() {
  
    return (
      <div>
      <Navbar />
      <News pageSize={12} country = "in" category="health"/>
      </div>
    )
  }
}

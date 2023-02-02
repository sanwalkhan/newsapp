import "./App.css";
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/news";
// import Spinner from "./components/Spinner";
import {
  BrowserRouter as Router,
  Route,  
  Routes,
} from "react-router-dom";


export default class App extends Component {
 
  render() {
  
    return (
      <div>
<Router>
<Navbar />
<Routes>
<Route exact path="/business"  element={ <News pageSize={12} country = "in" category="business"/>} />
<Route exact path="/entertainment" element={ <News pageSize={12} country = "in" category="entertainment"/>} />
<Route exact path="/general" element={ <News pageSize={12} country = "in" category="general"/>} />
<Route exact path="/health" element={ <News pageSize={12} country = "in" category="health"/>} />
<Route exact path="/science" element={ <News pageSize={12} country = "in" category="science"/>} />
<Route exact path="/sports" element={ <News pageSize={12} country = "in" category="sports"/>} />
<Route exact path="/technology" element={ <News pageSize={12} country = "in" category="technology"/>} />
</Routes>
</Router>


      </div>
    )
  }
}

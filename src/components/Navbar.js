// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
   state={
    mode : "dark"
   }
  render() {
    const toggleMode = () => {
        if (this.state.mode === "light") {
          this.setState({mode : "dark"});
          document.body.style.backgroundColor = "#042743";
        } else {
          this.setState({mode : "light"});
          document.body.style.backgroundColor = "white";     
        }
      };
    return (
      <div>
      <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
  <div className="container-fluid">
   <Link className="navbar-brand"  to="/">News-World</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/Business">business</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/Entertainment">entertainment</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/General">general</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/Health">health</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/Science">science</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/Sports">sports</Link>
        </li>  
        <li className="nav-item">
         <Link className="nav-link" to="/Technology">technology</Link>
        </li>  
      </ul>
      <div className={`form-check form-switch text-${this.state.mode === 'dark' ? 'light' : 'dark'}`}>
      <input
        className="form-check-input"
        type="checkbox"
        aria-checked="true"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={toggleMode} 
      />
      <label  className="form-check-label " htmlFor="flexSwitchCheckDefault">
      Enable {this.state.mode === 'dark' ? 'Light' : 'Dark'} Mode
      </label>
    </div>
    </div>
   
  </div>
</nav>
      </div>
    )
  }
}

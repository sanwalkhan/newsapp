// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import News from './news';

export default class Navbar extends Component {
   state={
    mode : "dark"
   }
  render() {
    <News data={this.state}/>
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
    <a className="navbar-brand"  href="/">News-World</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/general">general</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/health">health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports">science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports">sports</a>
        </li>  
      </ul>
      <div className={`form-check form-switch text-${this.state.mode === 'dark' ? 'light' : 'dark'}`}>
      <input
        className="form-check-input"
        type="checkbox"
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

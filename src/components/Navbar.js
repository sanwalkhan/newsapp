// import PropTypes from 'prop-types'
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import News from './news';

export default class Navbar extends Component {
  state = {
    mode: "light",
  };

  render() {
    const toggleMode = () => {
      if (this.props.Mode[0] === "light") {

        this.props.Mode[1]("dark")

        document.body.style.backgroundColor = "#042743";
      } else {

        this.props.Mode[1]("light")
        document.body.style.backgroundColor = "white";
      }
    };
    return (
      <div>
      <nav className={`navbar navbar-expand-lg navbar-${this.props.Mode[0]} bg-${this.props.Mode[0]}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News-World
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <div className={`form-check form-switch text-${this.props.Mode[0] === 'dark' ? 'light' : 'dark'}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  aria-checked="true"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={toggleMode}
                />
                <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
                  Enable {this.props.Mode[0] === 'dark' ? 'Light' : 'Dark'} Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

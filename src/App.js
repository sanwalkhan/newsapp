import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar";
import News from "./components/news";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";



const App = () => {
  const Mode = useState("light");



  return (
    <div>
      <Router>
        <NavBar Mode={Mode} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <News
                 
                key="general"
                pageSize={12}
                country="us"
                category="general"
                mode={Mode[0]}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                 
                key="business"
                pageSize={12}
                country="us"
                category="business"
                mode={Mode[0]}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                 
                key="entertainment"
                pageSize={12}
                country="us"
                category="entertainment"
                mode={Mode[0]}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                 
                key="general"
                pageSize={12}
                country="us"
                category="general"
                mode={Mode[0]}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                 
                key="health"
                pageSize={12}
                country="us"
                category="health"
                mode={Mode[0]}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                 
                key="science"
                pageSize={12}
                country="us"
                category="science"
                mode={Mode[0]}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                 
                key="sports"
                pageSize={12}
                country="us"
                category="sports"
                mode={Mode[0]}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                 
                key="technology"
                pageSize={12}
                country="us"
                category="technology"
                mode={Mode[0]}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

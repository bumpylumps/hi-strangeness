import React from "react"; 

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate,
} from "react-router-dom";


import Home from './pages/Home'
import About from './pages/About'
import Videos from './pages/Videos'


function App() {
 

  return (
    <>
      {
        <Router>
          <Routes>
            <Route 
              exact 
              path = "/"
              element = {<Home />}
            />
            <Route 
              exact 
              path = "/about"
              element = {<About />}
            />
             <Route 
              exact 
              path = "/videos"
              element = {<Videos />}
            />

          </Routes>
        </Router>
      }
    </>

    
  );
}

export default App;

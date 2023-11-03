import React from "react"; 

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate,
} from "react-router-dom";


import Home from './components/Home'
import About from './components/About'
import Videos from './components/Videos'


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

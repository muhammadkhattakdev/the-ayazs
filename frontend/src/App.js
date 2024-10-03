import React from 'react';
import Router from './components/mainComponents/router';
import "./static/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle";
import "animate.css/animate.compat.css"

import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

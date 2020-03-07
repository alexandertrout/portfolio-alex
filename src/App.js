import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Home from "./Components/Home"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Skills from "./Components/Skills"

class App extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <>
      <Router>
      <Home path="/" />
      <Portfolio path="/portfolio" />
      <About path="/about" />
      <Skills path="/skills" />
      <Contact path="/contact" />
      </Router>
      </>
    );
  }
}

export default App;
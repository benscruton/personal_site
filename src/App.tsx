import React from 'react';
import Nav from "./components/Nav";
import Background from "./components/Background";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import './App.css';
import {Router} from "@reach/router";

const App: React.FC = () => {
  return (
    <div className="App">
      <Background />
      <Nav />
      this text is in App.tsx
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Projects path="/projects" />
      </Router>
    </div>
  );
}

export default App;

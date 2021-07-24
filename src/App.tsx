import React, { useState, useEffect } from 'react';
import Background from "./components/Background";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Projects from "./views/Projects";
import ProjectDisplay from "./views/ProjectDisplay";
import Resume from "./views/Resume";
import './App.css';
import {Router} from "@reach/router";

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const findWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect( () => {
    window.addEventListener("resize", findWindowWidth);
    return () => window.removeEventListener("resize", findWindowWidth);
  }, []);

  return (
    <div className="App">
      <Background />
      <Intro />
      <Nav />
      <Router primary={false}>
        <Home path="/" windowWidth={windowWidth} />
        <Projects path="/projects" windowWidth={windowWidth}/>
        <ProjectDisplay path="/projects/:id" />
        <Resume path="/about" windowWidth={windowWidth}/>
      </Router>
    </div>
  );
}

export default App;

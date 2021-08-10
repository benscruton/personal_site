import React, { useState, useEffect } from 'react';
import Background from "./components/Background";
import DarkModeSwitch from './components/DarkModeSwitch';
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Projects from "./views/Projects";
import ProjectDisplay from "./views/ProjectDisplay";
import Resume from "./views/Resume";
import './App.css';
import {Router} from "@reach/router";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const toggleDark = () => setDarkMode(!darkMode);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const findWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect( () => {
    window.addEventListener("resize", findWindowWidth);
    return () => window.removeEventListener("resize", findWindowWidth);
  }, []);

  return (
    <div className="App">
      <Background darkMode={darkMode} />
      <Intro darkMode={darkMode} />
      <Nav darkMode={darkMode} />
      <DarkModeSwitch darkMode={darkMode} windowWidth={windowWidth} toggle={toggleDark} />
      <Router primary={false}>
        <Home path="/" windowWidth={windowWidth} darkMode={darkMode}/>
        <Resume path="/resume" windowWidth={windowWidth} darkMode={darkMode} />
        <Projects path="/projects" windowWidth={windowWidth} darkMode={darkMode} />
        <ProjectDisplay path="/projects/:id" windowWidth={windowWidth} darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;

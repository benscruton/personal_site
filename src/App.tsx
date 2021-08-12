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

  // DARK MODE SETTINGS:
  // 0 = follow system  ---  1 = light mode  ---  2 = dark mode
  const initialDarkModePref: number = parseInt(localStorage.getItem("darkMode") || "0");
  const [darkMode, setDarkMode] = useState<boolean>(initialDarkModePref ?
    initialDarkModePref === 2
    :
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // WINDOW WIDTH SETTINGS
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

      <DarkModeSwitch
        darkMode={darkMode}
        initialPref={initialDarkModePref}
        windowWidth={windowWidth}
        setDarkMode={setDarkMode}
      />

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

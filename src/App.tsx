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
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App: React.FC = () => {

  // DARK MODE SETTINGS:
  // 0: follow system  ---  1: light mode  ---  2: dark mode
  const systemDarkMode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const keyFromStorage: string | null = localStorage.getItem("darkMode");
  const initialDarkModePref: number = (keyFromStorage === null?
    systemDarkMode ? 2 : 1
    :
    parseInt(keyFromStorage)
  );
  const [darkMode, setDarkMode] = useState<boolean>(
    initialDarkModePref ? initialDarkModePref === 2 : systemDarkMode
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
    <Router>
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

        <Switch>
          <Route exact path="/">
            <Home windowWidth={windowWidth} darkMode={darkMode} />
          </Route>

          <Route path="/resume">
            <Resume windowWidth={windowWidth} darkMode={darkMode} />
          </Route>

          <Route exact path="/projects">
            <Projects windowWidth={windowWidth} darkMode={darkMode} />
          </Route>

          <Route path="/projects/:id">
            <ProjectDisplay windowWidth={windowWidth} darkMode={darkMode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

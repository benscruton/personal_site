import React from 'react';
import Background from "./components/Background";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import ProjectDisplay from "./views/ProjectDisplay";
import './App.css';
import {Router} from "@reach/router";

const App: React.FC = () => {
  return (
    <div className="App">
      <Background />
      <Intro />
      <Nav />
      <Router primary={false}>
        <Home path="/" />
        <About path="/about" />
        <Projects path="/projects" />
        <ProjectDisplay path="/projects/:id" />
      </Router>
    </div>
  );
}

export default App;

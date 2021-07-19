import React from "react";
import styles from "./Intro.module.css";
import gitHubLogo from "../img/GitHub-Mark-64px.png";
import linkedInLogo from "../img/LinkedIn-Blue-72px.png";
import gmailLogo from "../img/gmail-icon.png";

const Intro: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <h1>Ben Scruton</h1>
      <h3>Full Stack Web Developer</h3>
      <h3>Chicago, IL</h3>
      <div className={styles.multipleitems}>
        <a
          href="https://github.com/benscruton"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={gitHubLogo}
            alt="GitHub"
            className={styles.icons}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ben-scruton-chicago/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedInLogo}
            alt="LinkedIn"
            className={styles.icons}
          />
        </a>

        <a
          href="mailto:benjamin.scruton@gmail.com"
        >
          <img
            src={gmailLogo}
            alt="Gmail"
            className={styles.icons}
          />
        </a>
      </div>
    </header>
  );
}

export default Intro;
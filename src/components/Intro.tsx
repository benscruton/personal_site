import React from "react";
import styles from "./Intro.module.css";
import gitHubLogo from "../img/GitHub-Mark-64px.png";
import gitHubLogoWhite from "../img/GitHub-Mark-Light-64px.png"
import linkedInLogo from "../img/LinkedIn-Blue-72px.png";
import linkedInLogoWhite from "../img/LinkedIn-White-72px.png";
import gmailLogo from "../img/gmail-icon.png";
import gmailLogoLight from "../img/gmail-icon-Light.png";

interface Props{
  darkMode: boolean
}

const Intro: React.FC<Props> = ({darkMode}) => {
  return (
    <header className={styles.wrapper}>
      <h1 className={darkMode ? "light-text" : ""}>Ben Scruton</h1>
      <h3 className={darkMode ? "light-text" : ""}>Full Stack Web Developer</h3>
      <h3 className={darkMode ? "light-text" : ""}>Chicago, IL</h3>
      <div className={styles.multipleitems}>
        <a
          href="https://github.com/benscruton"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={darkMode ? gitHubLogoWhite : gitHubLogo}
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
            src={darkMode ? linkedInLogoWhite : linkedInLogo}
            alt="LinkedIn"
            className={styles.icons}
          />
        </a>

        <a
          href="mailto:benjamin.scruton@gmail.com"
        >
          <img
            src={darkMode ? gmailLogoLight : gmailLogo}
            alt="Gmail"
            className={styles.icons}
          />
        </a>
      </div>
    </header>
  );
}

export default Intro;
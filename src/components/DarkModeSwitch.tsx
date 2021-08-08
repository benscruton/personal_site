import React from "react";
import styles from "./DarkModeSwitch.module.css";

interface Props{
  darkMode: boolean,
  windowWidth: number,
  toggle: () => void
}

const DarkModeSwitch: React.FC<Props> = ({darkMode, windowWidth, toggle}) => {

  return (
    <div className={windowWidth > 550 ? styles.wide : styles.narrow}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggle}
        />
        <span className={styles.slider}></span>
      </label>
      <h5 className={darkMode ? "light-text" : ""}>
        Dark Mode
      </h5>
    </div>
  );
}

export default DarkModeSwitch;
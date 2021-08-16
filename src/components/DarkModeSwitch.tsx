import React, { useState, useEffect, useRef } from "react";
import styles from "./DarkModeSwitch.module.css";
import CSS from "csstype";

interface Props{
  darkMode: boolean,
  initialPref: number,
  windowWidth: number,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkModeSwitch: React.FC<Props> = ({darkMode, initialPref, windowWidth, setDarkMode}) => {
  
  const [preferSystemMode, setPreferSystemMode] = useState<boolean>(!initialPref);
  const preferSystemModeRef = useRef(preferSystemMode);
  useEffect( () => {
    preferSystemModeRef.current = preferSystemMode;
  });
  
  const handleSystemModeChange = () => {
    if(preferSystemModeRef.current){
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  };
  
  useEffect( () => {
    window.matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSystemModeChange);
    return () => window.matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", handleSystemModeChange);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const togglePreferSystemMode = () => {
    let key: string = preferSystemMode ? (darkMode ? "2" : "1") : "0";
    setPreferSystemMode(!preferSystemMode);
    localStorage.setItem("darkMode", key);
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  };

  const toggleDarkMode = () => {
    if(!preferSystemMode){
      setDarkMode(!darkMode)
      let key: string = darkMode ? "1" : "2";
      localStorage.setItem("darkMode", key);
    }
  };

  const extraWide: CSS.Properties = {
    right: `${Math.floor((windowWidth - 1350) / 2) + 10}px`,
  };

  return (
    <div
      className={windowWidth > 600 ? styles.wide : styles.narrow}
      style={windowWidth > 1370 ? extraWide : {}}
    >
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <span
          className={preferSystemMode ? styles.sliderunavailable : styles.slider}
        >
        </span>
      </label>

      <h5 className={darkMode ? "light-text" : ""}>
        Dark Mode
      </h5>

      <div className={styles.defaultoption}>
        <input
          type="checkbox"
          id="darkmodedefault"
          className={styles.defaultcheckbox}
          checked={preferSystemMode}
          onChange={togglePreferSystemMode}
        />
        <label htmlFor="darkmodedefault" className={darkMode ? "light-text" : ""}>
          Use device settings
        </label>
      </div>
    </div>
  );
}

export default DarkModeSwitch;
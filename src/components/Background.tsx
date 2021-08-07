import React from "react";
import styles from "./Background.module.css";

interface Props {
  darkMode: boolean
}

const Background: React.FC<Props> = ({darkMode}) => {
  const bgClass = darkMode ? styles.bgdark : styles.bg
  return (
    <div className={bgClass}>
    </div>
  );
};

export default Background;
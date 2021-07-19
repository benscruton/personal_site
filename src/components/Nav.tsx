import React from "react";
import styles from "./Nav.module.css";
import { navigate } from "@reach/router";

interface Props {}

const Nav: React.FC<Props> = () => {

  return (
    <div className={styles.wrapper}>
      <ul className={styles.links}>
        <li className={styles.navlink} onClick={() => navigate("/")}>
          <span className={styles.navtext}>
            Home
          </span>
        </li>

        <li className={styles.navlink}
        onClick={() => navigate("/about")}>
          <span className={styles.navtext}>
            About
          </span>
        </li>

        <li className={styles.navlink} onClick={() => navigate("/projects")}>
          <span className={styles.navtext}>
            Projects
          </span>
        </li>

      </ul>
    </div>
  );
}

export default Nav;
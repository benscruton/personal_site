import React from "react";
import styles from "./Nav.module.css";
import { Link } from "@reach/router";

interface Props {

}

const Nav: React.FC<Props> = () => {

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Hello!</h2>
      <ul className={styles.pages}>
        <li className={styles.navlink}>
          <Link to="/" className={styles.navtext}>
            Home
          </Link>
        </li>

        <li className={styles.navlink}>
          <Link to="/about" className={styles.navtext}>
            About
          </Link>
        </li>

        <li className={styles.navlink}>
          <Link to="/projects" className={styles.navtext}>
            Projects
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Nav;
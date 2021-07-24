import React from "react";
import styles from "./Nav.module.css";
import { Link } from "@reach/router";
import NavProjectSubMenu from "./NavProjectSubMenu";

interface Props {}

const Nav: React.FC<Props> = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarmain}>
        <div className={styles.links}>

          <Link
            className={styles.navlink}
            to="/"
          >
            Home
          </Link>

          <Link
            className={styles.navlink}
            to="/about"
          >
            Résumé 
          </Link>

          <div className={styles.navlinkwithsubmenu}>
            <Link
              className={styles.navlink}
              to="/projects"
            >
              Projects
            </Link>

            <NavProjectSubMenu
              styles={styles}
            />
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;
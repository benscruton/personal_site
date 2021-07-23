import React from "react";
import styles from "./Nav.module.css";
import { navigate } from "@reach/router";
import NavProjectSubMenu from "./NavProjectSubMenu";

interface Props {}

const Nav: React.FC<Props> = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarmain}>
        <ul className={styles.links}>

          <li
            className={styles.navlink}
            onClick={() => navigate("/")}
          >
            Home
          </li>

          <li
            className={styles.navlink}
            onClick={() => navigate("/about")}
          >
            Résumé 
          </li>

          <div className={styles.navlinkwithsubmenu}>
            <li
              className={styles.navlink}
              onClick={() => navigate("/projects")}
            >
              Projects
            </li>

            <NavProjectSubMenu
              styles={styles}
            />
            
          </div>

        </ul>
      </div>
    </div>
  );
}

export default Nav;
import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "@reach/router";
import NavProjectSubMenu from "./NavProjectSubMenu";

interface Props {}

const Nav: React.FC<Props> = () => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const toggleSubMenu = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowSubMenu(!showSubMenu);
  };

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
            to="/resume"
          >
            Résumé 
          </Link>

          <div className={styles.navlinkwithsubmenu}>
            <a
              className={styles.navlink}
              href="/projects"
              onClick={toggleSubMenu}
            >
              Project Menu
            </a>
            
            {showSubMenu?
              <NavProjectSubMenu
                styles={styles}
                toggleMenu={toggleSubMenu}
                hideMenu={() => setShowSubMenu(false)}
              />
              :
              <></>
            }
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;
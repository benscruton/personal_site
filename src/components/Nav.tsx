import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "@reach/router";
import NavProjectSubMenu from "./NavProjectSubMenu";
import CSS from "csstype";

interface Props {}

const Nav: React.FC<Props> = () => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const toggleSubMenu = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowSubMenu(!showSubMenu);
  };

  const transparentStyle: CSS.Properties = {
    color: "#0000",
    backgroundColor: "#0000"
  }

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
              style={showSubMenu? transparentStyle : {}}
            >
              ▸ Projects
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
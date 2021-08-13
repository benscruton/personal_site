import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import NavProjectSubMenu from "./NavProjectSubMenu";
import CSS from "csstype";

interface Props {
  windowWidth: number,
  darkMode: boolean,
}

const Nav: React.FC<Props> = ({windowWidth, darkMode}) => {
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
    <div className={darkMode ? styles.wrapperdark : styles.wrapper}>
      <div
        className={darkMode ? styles.fillerdark : styles.filler}
        // style={{width: `${windowWidth}px`}}
      >
      </div>

      <div className={styles.navbarmain}>
        <div className={styles.links}>

          <Link
            className={darkMode ? styles.navlinkdark : styles.navlink}
            to="/"
          >
            Home
          </Link>

          <Link
            className={darkMode ? styles.navlinkdark : styles.navlink}
            to="/resume"
          >
            Résumé 
          </Link>

          <div className={styles.navlinkwithsubmenu}>
            <a
              className={darkMode ? styles.navlinkdark : styles.navlink}
              href="/projects"
              onClick={toggleSubMenu}
              style={showSubMenu? transparentStyle : {}}
            >
              {/* &#9656; Projects */}
              {">"}&nbsp;Projects
            </a>
            
            {showSubMenu?
              <NavProjectSubMenu
                styles={styles}
                darkMode={darkMode}
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
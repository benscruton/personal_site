import React from "react";
import { Link } from "react-router-dom";
import projects from "../projectInfo";

interface Props{
  styles: {
    readonly [key: string]: string;
  },
  darkMode: boolean,
  toggleMenu: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  hideMenu: () => void
}

const NavProjectSubMenu: React.FC<Props> = ({styles, darkMode, toggleMenu, hideMenu}) => {
  return (
    <ul
      className={darkMode ? styles.submenudark : styles.submenu}
    >
      <li>
        <a href="/projects" onClick={toggleMenu}>
        {/* &#9663; Projects */}
        v&nbsp;Projects
        </a>
      </li>

      <li>
        <Link
          to="/projects"
          onClick={hideMenu}
          className={styles.boldleft}
        >
          Projects Home
        </Link>
      </li>
      {projects.map( (proj, idx) =>
        <li key={idx}>
          <Link
            to={proj.localAddress || "/projects"}
            onClick={hideMenu}
          >
            - {proj.title.mainTitle.text}
          </Link>
        </li>
      )}

    </ul>
  );
}

export default NavProjectSubMenu;
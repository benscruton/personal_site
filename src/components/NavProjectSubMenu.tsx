import React from "react";
import { Link } from "@reach/router";
import projects from "../projectInfo";

interface Props{
  styles: {
    readonly [key: string]: string;
  },
  toggleMenu: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  hideMenu: () => void
}

const NavProjectSubMenu: React.FC<Props> = ({styles, toggleMenu, hideMenu}) => {
  return (
    <ul
      className={styles.submenu}
    >
      <li>
        <a href="/projects" onClick={toggleMenu}>
          Close Menu
        </a>
      </li>

      <li>
        <Link
          to="/projects"
          onClick={hideMenu}
        >
          Projects Home
        </Link>
      </li>
      {projects.map( (proj, idx) =>
        <li key={idx}>
          <Link
            to={proj.title.mainTitle.linkAddress || "/projects"}
            onClick={hideMenu}
          >
            {proj.title.mainTitle.text}
          </Link>
        </li>
      )}

    </ul>
  );
}

export default NavProjectSubMenu;
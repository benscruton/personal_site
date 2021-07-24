import React from "react";
import { Link } from "@reach/router";
import projects from "../projectInfo";

interface Props{
  styles: {
    readonly [key: string]: string;
  }
}

const NavProjectSubMenu: React.FC<Props> = ({styles}) => {
  return (
    <ul className={styles.submenu}>
      <li>
        <Link
          to="/projects"
        >
          Projects
        </Link>
      </li>
      {projects.map( (proj, idx) =>
        <li key={idx}>
          <Link to={proj.title.mainTitle.linkAddress || "/projects"}>
            {proj.title.mainTitle.text}
          </Link>
        </li>
      )}
    </ul>
  );
}

export default NavProjectSubMenu;
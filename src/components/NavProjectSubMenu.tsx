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
    <div className={styles.submenu}>
      <p>
        <Link to="/projects">
          Projects
        </Link>
      </p>
      {projects.map( (proj, idx) =>
        <p key={idx}>
          <Link to={proj.title.linkAddress}>
            {proj.title.text}
          </Link>
        </p>
      )}
    </div>
  );
}

export default NavProjectSubMenu;
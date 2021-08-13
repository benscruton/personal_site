import React from "react";
import TextWithLink from "../interfaces/TextWithLink";
import { Link } from "react-router-dom";

interface Props{
  items: TextWithLink[]
}

const SeparatedList: React.FC<Props> = ({items}) => {
  return (
    <>
      {items.map( (item, idx) =>
        <span key={idx}>
          {item.linkAddress?
            item.external ?
              <a
                href={item.linkAddress}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
              :
              <Link to={item.linkAddress}>
                {item.text}
              </Link>              
            :
            <>{item.text}</>
          }
          
          {/* separator: */}
          {idx < items.length - 1?
            <>&nbsp; | &nbsp;</>
            :
            <></>
          }
        </span>
      )}
    </>
  );
}

export default SeparatedList;
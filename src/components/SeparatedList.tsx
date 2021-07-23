import React from "react";
import TextWithLink from "../interfaces/TextWithLink";
import { Link } from "@reach/router";

interface Props{
  items: Array<TextWithLink>
}

const SeparatedList: React.FC<Props> = ({items}) => {
  return (
    <>
      {items.map( (item, idx) =>
        <span key={idx}>
          {item.linkAddress?
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
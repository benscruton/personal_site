import React from "react";
import { RouteComponentProps } from "@reach/router";
import MediaDisplay from "../components/MediaDisplay";

interface Props {
  path: RouteComponentProps
}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <h1>Home page woo</h1>
      <p>here's some stuff</p>
      <MediaDisplay
        mediaAddress="https://imagescdn.juno.co.uk/300/CS724316-01A-MED.jpg"
        altText="The album Gece, by Altın Gün"
        height="900px"
      />
    </div>
  );
}

export default Home;
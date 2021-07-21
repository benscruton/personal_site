import Project from "../interfaces/Project";
import chessRouletteSpotlight from "../img/chessRouletteSpotlight.png";
import techIcons from "../img/techIcons";

const chessRoulette: Project = {
  id: "chessRoulette",
  title: {
    text: "Chess Roulette",
    linkAddress: "/projects/chessRoulette"
  },
  description: [],
  pitch: [
    "Chess Roulette is a platform where users can play chess against other users (or themselves).  Its integration with Socket.IO means that moves and other game updates are displayed in real time across browsers and devices.",
    "Currently it supports the standard rules of chess, but its modular file structure is designed with the idea of adding chess variants later in development."
  ],
  spotlightMedia: {
    address: chessRouletteSpotlight,
    altText: "Screenshot from Chess Roulette"
  },
  technologies: [
    techIcons.javascript,
    techIcons.nodejs,
    techIcons.react,
    techIcons.expressjs,
    techIcons.mongodb,
    techIcons.jwt,
    techIcons.socket,
    techIcons.bootstrap
  ]
};

export default chessRoulette;
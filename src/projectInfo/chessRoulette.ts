import Project from "../interfaces/Project";
import chessRouletteSpotlight from "../img/chessRouletteSpotlight.png";
import techIcons from "../img/techIcons";

const chessRoulette: Project = {
  id: "chessRoulette",
  title: {
    mainTitle: {
      text: "Chess Roulette",
      linkAddress: "/projects/chessroulette"
    },
    subtitle: []
  },
  description: [],
  pitch: [
    "Chess Roulette is a single-page application where users can play chess against other users (or themselves).  Its integration with Socket.IO allows moves and other game updates to be displayed in real time across browsers and devices. Options to play with variant rule sets coming soon!"
  ],
  spotlightMedia: {
    address: chessRouletteSpotlight,
    altText: "Screenshot from Chess Roulette"
  },
  technologies: [
    techIcons.javascript,
    techIcons.react,
    techIcons.nodejs,
    techIcons.expressjs,
    techIcons.mongodb,
    techIcons.jwt,
    techIcons.socket,
    techIcons.bcrypt,
    techIcons.axios,
    techIcons.html,
    techIcons.css,
    techIcons.bootstrap
  ]
};

export default chessRoulette;
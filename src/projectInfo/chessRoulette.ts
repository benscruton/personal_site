import Project from "../interfaces/Project";
import chessRouletteSpotlight from "../img/chessRouletteSpotlight.png";
import techIcons from "../img/techIcons";
import demoImages from "../img/projectDemos/chessRoulette";

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
    techIcons.bootstrap,
  ]
};

chessRoulette.description.push({
  text: "On first navigating to Chess Roulette, users will find this login and registration page.  Here they can set up a new account, or log in using their username or email address.  Passwords are stored securely with bcrypt hashing.",
  media: demoImages.login
});

export default chessRoulette;
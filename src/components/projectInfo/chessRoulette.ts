import Project from "../interfaces/Project";
import chessRouletteSpotlight from "../../img/chessRouletteSpotlight.png";

const chessRoulette: Project = {
  id: "chessRoulette",
  title: {
    text: "Chess Roulette",
    linkAddress: "/projects/chessRoulette"
  },
  description: [],
  pitch: [
    "I built an app that lets you play chess and stuff",
    "Eventually it'll have variants too but it doesn't yet"
  ],
  spotlightMedia: {
    address: chessRouletteSpotlight,
    altText: "Screenshot from Chess Roulette"
  }
};

export default chessRoulette;
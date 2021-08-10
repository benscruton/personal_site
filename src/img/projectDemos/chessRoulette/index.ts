import changeSpriteAddr from "./changeSpriteStyle.webm";
import createJoinStartAddr from "./createJoinStartSocket.webm";
import editUserAddr from "./editUser.webm";
import foolsMateAddr from "./foolsMate.webm";
import gameFiltersAddr from "./gameFilters.webm";
import gameLobbyAddr from "./gameLobby.png";
import loginAddr from "./login.png";
import moveLogAddr from "./moveLog.webm";
import movingInCheckAddr from "./movingInCheck.webm";
import pawnPromotionAddr from "./pawnPromotion.webm";
import offerDrawResignAddr from "./offerDrawResign.webm";
import Media from "../../../interfaces/Media";

const login: Media = {
  address: loginAddr,
  altText: "Screenshot of the Chess Roulette login page"
};

const editUser: Media = {
  address: editUserAddr,
  altText: "Editing user information, including password",
  videoType: "video/ogg"
};

const gameLobby: Media = {
  address: gameLobbyAddr,
  altText: "Screenshot of the game lobby"
};

const gameFilters: Media = {
  address: gameFiltersAddr,
  altText: "Filters being applied in the game lobby",
  videoType: "video/ogg"
};

const createJoinStart: Media = {
  address: createJoinStartAddr,
  altText: "Creating, joining, and starting a game, shown updating across browsers with socket",
  videoType: "video/ogg"
};

const foolsMate: Media = {
  address: foolsMateAddr,
  altText: "Checkmate in two moves",
  videoType: "video/ogg"
};

const movingInCheck: Media = {
  address: movingInCheckAddr,
  altText: "Black is prevented from moving into check",
  videoType: "video/ogg"
};

const pawnPromotion: Media = {
  address: pawnPromotionAddr,
  altText: "White promoting a pawn to a rook",
  videoType: "video/ogg"
};

const moveLog: Media = {
  address: moveLogAddr,
  altText: "Move log updating with moves in real time across browsers",
  videoType: "video/ogg"
};

const changeSprite: Media = {
  address: changeSpriteAddr,
  altText: "Switching between sprite styles to display on board",
  videoType: "video/ogg"
};

const offerDrawResign: Media = {
  address: offerDrawResignAddr,
  altText: "Demo of draw-offering and resigning system",
  videoType: "video/ogg"
};

const images: {readonly [key: string]: Media} = {
  login,
  editUser,
  gameLobby,
  gameFilters,
  createJoinStart,
  foolsMate,
  movingInCheck,
  pawnPromotion,
  moveLog,
  changeSprite,
  offerDrawResign
};

export default images;
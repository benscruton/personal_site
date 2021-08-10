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
    subtitle: [
      {
        text: "GitHub",
        linkAddress: "https://github.com/benscruton/chess_roulette",
        external: true
      }
    ]
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

chessRoulette.description.push({
  text: "Users can edit their name and email by clicking the Edit button on the \"Profile\" page.  The password can also be updated, but first the user must provide the current password, in addition to typing the new password twice to confirm accuracy.  Usernames cannot be changed.",
  media: demoImages.editUser
});

chessRoulette.description.push({
  text: "All of the games can be viewed in the game lobby, accessed by clicking \"Games\" in the navigation menu.",
  media: demoImages.gameLobby
});

chessRoulette.description.push({
  text: "The game lobby offers a variety of filters to help users find a particular game they are looking for, or a particular category of games.  On top of any of the filters, there is also a \"My Games\" slider that can be activated to show only the games that the user has joined.",
  media: demoImages.gameFilters
});

chessRoulette.description.push({
  text: "Both the game lobby and the individual game rooms are connected by Socket.IO, so any time a new game is created or deleted, or joined or left by a user, these updates will appear in real time across browsers and devices without a need for a page refresh.  If a game is deleted while a user is viewing that room, they will be automatically redirected back to the lobby.",
  media: demoImages.createJoinStart
});

chessRoulette.description.push({
  text: "Similarly, Socket.IO also communicates moves in real time across browsers and devices.  This also includes related information such as check and checkmate.  This example demonstrates a checkmate in two moves, the so-called \"Fool's Mate.\"",
  media: demoImages.foolsMate
});

chessRoulette.description.push({
  text: "Continuing on the topic of checks: the move logic is also written to prevent players from moving into check.  The example here demonstrates this: initially, the Black king is not in check, so the Black knight can move anywhere, but the king cannot move into check.  Once White moves the rook to check the king, the Black knight's only move is to the square that would block the check.",
  media: demoImages.movingInCheck
});

chessRoulette.description.push({
  text: "When a pawn reaches the final rank to be promoted, a display box appears allowing them to select the piece.  Only the relevant player is able to see this box.  To other players, the pawn will appear on the final rank until a piece is selected, at which point the pawn is replaced and then the turn indicator will flip.",
  media: demoImages.pawnPromotion
});

chessRoulette.description.push({
  text: "As players make moves, the moves are also converted into standard chess notation and recorded in a running move log, which appears beneath the board.",
  media: demoImages.moveLog
});

chessRoulette.description.push({
  text: "The user also has the option to pick between two different image styles, using the buttons below the move log.",
  media: demoImages.changeSprite
});

chessRoulette.description.push({
  text: "There is also a system for ending the game early, by resigning or offering a draw.  When a player offers a draw, the other player can accept the offer to end the game, or reject the offer to continue play.  The offering player can rescind the offer at any time.  If a player clicks the button to resign, they will be asked to confirm before the resignation is final.",
  media: demoImages.offerDrawResign
});

export default chessRoulette;

  // login,
  // editUser,
  // gameLobby,
  // gameFilters,
  // createJoinStart,
  // foolsMate,
  // movingInCheck,
  // pawnPromotion,
  // moveLog,
  // changeSprite
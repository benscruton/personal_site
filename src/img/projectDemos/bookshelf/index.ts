import loginAddr from "./bookshelf_login.png";
import friendProfileAddr from "./bookshelf_friend_profile.png";
import Media from "../../../interfaces/Media";

const login: Media = {
  address: loginAddr,
  altText: "Bookshelf login page"
}

const friendProfile: Media = {
  address: friendProfileAddr,
  altText: "Profile of a user who is friends with the logged-in user"
}

export default {
  login,
  friendProfile
};
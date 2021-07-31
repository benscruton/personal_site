import loginAddr from "./bookshelf_login.png";
import friendProfileAddr from "./bookshelf_friend_profile.png";
import addBookAddr from "./bookshelf_add_book_to_shelf.ogg";
import Media from "../../../interfaces/Media";

const login: Media = {
  address: loginAddr,
  altText: "Bookshelf login page"
}

const friendProfile: Media = {
  address: friendProfileAddr,
  altText: "Profile of a user who is friends with the logged-in user"
}

const addBook: Media = {
  address: addBookAddr,
  altText: "Adding a book to a shelf"
}

export default {
  login,
  friendProfile,
  addBook
};
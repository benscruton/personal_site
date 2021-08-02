import loginAddr from "./bookshelf_login.png";
import yourProfileAddr from "./bookshelf_profile.png";
import friendProfileAddr from "./bookshelf_friend_profile.png";
import addBookAddr from "./bookshelf_add_book_to_shelf.ogg";
import recommendAddr from "./bookshelf_recommend_to_friend.webm";
import notFriendProfileAddr from "./bookshelf_not_friend_profile.png";
import removeBookAddr from "./bookshelf_remove_book.webm";
import searchUserAddr from "./bookshelf_search_user.webm";
import Media from "../../../interfaces/Media";

const login: Media = {
  address: loginAddr,
  altText: "Bookshelf login page"
}

const yourProfile: Media = {
  address: yourProfileAddr,
  altText: "Logged-in user's own profile"
};

const friendProfile: Media = {
  address: friendProfileAddr,
  altText: "Profile of a user who is friends with the logged-in user"
}

const notFriendProfile: Media = {
  address: notFriendProfileAddr,
  altText: "Profile of a user who is not friends with the logged-in user"
};

const addBook: Media = {
  address: addBookAddr,
  altText: "Adding a book to a shelf"
}

const recommend: Media = {
  address: recommendAddr,
  altText: "Recommend a book to a friend",
  videoType: "video/webm"
}

const removeBook: Media = {
  address: removeBookAddr,
  altText: "Removing a book from your shelf",
  videoType: "video/webm"
}

const searchUser: Media = {
  address: searchUserAddr,
  altText: "Search for another user",
  videoType: "video/webm"
}

export default {
  login,
  yourProfile,
  friendProfile,
  notFriendProfile,
  addBook,
  removeBook,
  recommend,
  searchUser,
};
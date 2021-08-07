import categoryAddr from "./addEditRemoveCategory.ogg";
import recipeAddr from "./addRecipe.ogg";
import ingredientAddr from "./addRemoveIngredients.ogg";
import authZeroAddr from "./authZero.png";
import dragAndDropAddr from "./dragAndDrop.ogg";
import homePageAddr from "./homePage.png";
import notLoggedInAddr from "./notLoggedIn.png";
import recipePageAddr from "./recipePage.png";
import shoppingListAddr from "./shoppingList.png";
import storeModeAddr from "./storeMode.ogg";
import Media from "../../../interfaces/Media";

const category: Media = {
  address: categoryAddr,
  altText: "Adding, editing, and removing categories from the categorized list",
  videoType: "video/ogg"
};

const recipe: Media = {
  address: recipeAddr,
  altText: "Adding a new recipe to the database",
  videoType: "video/ogg"
};

const ingredient: Media = {
  address: ingredientAddr,
  altText: "Adding and removing ingredients to the shopping list",
  videoType: "video/ogg"
};

const authZero: Media = {
  address: authZeroAddr,
  altText: "Third-party login provided by Auth0"
};

const dragAndDrop: Media = {
  address: dragAndDropAddr,
  altText: "Reorder ingredients, including across categories, with drag-and-drop functionality",
  videoType: "video/ogg"
};

const homePage: Media = {
  address: homePageAddr,
  altText: "The home page of Dinner Getter, featuring the user's pantry and suggested recipes"
};

const notLoggedIn: Media = {
  address: notLoggedInAddr,
  altText: "Before logging into the site, users are presented with a login button"
};

const recipePage: Media = {
  address: recipePageAddr,
  altText: "A user's recipe page"
};

const shoppingList: Media = {
  address: shoppingListAddr,
  altText: "A user's shopping list"
};

const storeMode: Media = {
  address: storeModeAddr,
  altText: "Entering store mode on the shopping list",
  videoType: "video/ogg"
};

const images: {readonly [key: string]: Media} = {
  notLoggedIn,
  authZero,
  homePage,
  recipePage,
  recipe,
  shoppingList,
  ingredient,
  category,
  dragAndDrop,
  storeMode
};

export default images;
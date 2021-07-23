import Media from "../../interfaces/Media";

import ajaxAddr from "./ajax.png";
import auth0Addr from "./auth0.png";
import axiosAddr from "./axios.svg";
import bcryptAddr from "./bcrypt.png";
import bootstrapAddr from "./bootstrap.png";
import cssAddr from "./css3.png";
import djangoAddr from "./django.svg";
import expressjsAddr from "./expresswordlogo.png";
import htmlAddr from "./html5.png";
import javaAddr from "./java.png";
import javascriptAddr from "./javascript.png";
import jqueryAddr from "./jQuery.png";
import jwtAddr from "./jwt.png";
import materializeAddr from "./materialize.svg";
import mongodbAddr from "./mongodb.png";
import mysqlAddr from "./mysql.png";
import nodejsAddr from "./nodejs.svg";
import pythonAddr from "./python.png";
import reactAddr from "./react.png";
import socketAddr from "./socket.png";
import springAddr from "./spring.svg";
import sqliteAddr from "./sqlite.png";

const ajax: Media = {
  address: ajaxAddr,
  altText: "AJAX",
  text: "AJAX"
};
const auth0: Media = {
  address: auth0Addr,
  altText: "Auth0",
  text: "Auth0"
};
const axios: Media = {
  address: axiosAddr,
  altText: "Axios",
  text: "Axios"
};
const bcrypt: Media = {
  address: bcryptAddr,
  altText: "bcrypt",
  text: "bcrypt"
};
const bootstrap: Media = {
  address: bootstrapAddr,
  altText: "Bootstrap",
  text: "Bootstrap"
};
const css: Media = {
  address: cssAddr,
  altText: "CSS",
  text: "CSS"
};
const django: Media = {
  address: djangoAddr,
  altText: "Django",
  text: "Django"
};
const expressjs: Media = {
  address: expressjsAddr,
  altText: "Express",
  text: "Express"
};
const html: Media = {
  address: htmlAddr,
  altText: "HTML",
  text: "HTML"
};
const java: Media = {
  address: javaAddr,
  altText: "Java",
  text: "Java"
}
const javascript: Media = {
  address: javascriptAddr,
  altText: "JavaScript",
  text: "JavaScript"
};
const jquery: Media = {
  address: jqueryAddr,
  altText: "jQuery",
  text: "jQuery"
};
const jwt: Media = {
  address: jwtAddr,
  altText: "JSON Web Token",
  text: "JSON Web Token"
};
const materialize: Media = {
  address: materializeAddr,
  altText: "Materialize",
  text: "Materialize"
};
const mongodb: Media = {
  address: mongodbAddr,
  altText: "MongoDB",
  text: "MongoDB"
};
const mysql: Media = {
  address: mysqlAddr,
  altText: "MySQL",
  text: "MySQL"
};
const nodejs: Media = {
  address: nodejsAddr,
  altText: "Node.js",
  text: "Node.js"
};
const python: Media = {
  address: pythonAddr,
  altText: "Python",
  text: "Python"
};
const react: Media = {
  address: reactAddr,
  altText: "React",
  text: "React"
};
const socket: Media = {
  address: socketAddr,
  altText: "Socket.IO",
  text: "Socket.IO"
};
const spring: Media = {
  address: springAddr,
  altText: "Spring Boot",
  text: "Spring Boot"
};
const sqlite: Media = {
  address: sqliteAddr,
  altText: "SQLite",
  text: "SQLite"
};

const icons: {[key: string]: Media} = {
  ajax,
  auth0,
  axios,
  bcrypt,
  bootstrap,
  css,
  django,
  expressjs,
  html,
  java,
  javascript,
  jquery,
  jwt,
  materialize,
  mongodb,
  mysql,
  nodejs,
  python,
  react,
  socket,
  spring,
  sqlite,
};

export default icons;
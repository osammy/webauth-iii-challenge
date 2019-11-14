const cors = require("cors");
const express = require("express");
const session = require("express-session");
const sessionConfig = {
  name: "notsession", // default is connect.sid
  secret: "nobody tosses a dwarf!",
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false // only set cookies over https. Server will not send back a cookie over http.
  }, // 1 day in milliseconds
  httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
  resave: false,
  saveUninitialized: false
};

module.exports = function(app) {
  app.use(cors());
  app.use(express.json());
  app.use(session(sessionConfig));
};

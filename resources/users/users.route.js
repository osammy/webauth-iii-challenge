const express = require('express');

const Users = require('./users.helpers');
const Auth = require("../../authController");
const verify = require("../../verify");

const router = express.Router();

router.route("/")
.post(Users.create)
.get(verify.verifyOrdinaryUser,Users.find)

router.route("/login")
.post(Auth.login)

router.route("/register")
.post(Auth.register)


module.exports = router;
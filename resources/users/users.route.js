const express = require('express');

const Users = require('./users.helpers');
const Auth = require("../../authController");
const validate = require("../../validate");

const router = express.Router();

router.route("/")
.post(Users.create)
.get(validate,Users.find)

router.route("/login")
.post(Auth.login)

router.route("/register")
.post(Auth.register)


module.exports = router;
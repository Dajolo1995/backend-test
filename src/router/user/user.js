const express = require("express");
const api = express.Router();
const { check } = require("express-validator");

const { createUser, updateUser  } = require("../../controller/user/SetUserController");
const {
  getUserController,
  getUserControllerId
} = require("../../controller/user/getUserController");

api.post(
  "/user",

  createUser
);

api.get("/user", getUserController);
api.get("/user/:id", getUserControllerId);
api.put("/user/:id", updateUser);

module.exports = api;

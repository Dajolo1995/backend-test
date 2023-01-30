const express = require("express");
const api = express.Router();

const { userAuth, auth } = require("../../controller/auth/Auth");

api.post("/auth", auth);

api.post("/authentic", userAuth);

module.exports = api;

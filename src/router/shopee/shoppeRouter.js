const express = require("express");
const api = express.Router();

const shopee = require("../../controller/detailsProduct/buyCotroller");

api.post("/shopee", shopee);

module.exports = api;

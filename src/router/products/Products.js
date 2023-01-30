const express = require("express");
const api = express.Router();

const {
  newProducts,
} = require("../../controller/products/SetProductsController");

const {
  getProducts,
  getProductId,
} = require("../../controller/products/getProductController");

api.post("/product", newProducts);
api.get("/product", getProducts);
api.get("/product/:id", getProductId);

module.exports = api;

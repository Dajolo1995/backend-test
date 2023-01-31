const express = require("express");
const api = express.Router();

const {
  newProducts,
  updateProduct,
} = require("../../controller/products/SetProductsController");

const {
  getProducts,
  getProductId,
  getProductActive,
} = require("../../controller/products/getProductController");

api.post("/product", newProducts);
api.get("/product", getProducts);
api.get("/product/:id", getProductId);
api.get("/getProductActive", getProductActive);

api.put("/product/:id", updateProduct);

module.exports = api;

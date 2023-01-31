const express = require("express");
const api = express.Router();

const {
  newProductsDetails,
  detailProductCategory,
} = require("../../controller/detailsProduct/SetDetailsProduct");

const {
  getDetailsProducts,
  getDetailsProductId,
} = require("../../controller/detailsProduct/getDetailsProduct");

api.post("/details", newProductsDetails);
api.get("/details", getDetailsProducts);
api.post("/detail", getDetailsProductId);
api.put("/detail/:id", detailProductCategory);

module.exports = api;

const express = require("express");
const api = express.Router();

const {
  CreateCategory,
  updateCategory,
} = require("../../controller/category/SetCategoryController");

const {
  getCategory,
  getCategoryId,
  getcategoryActive,
} = require("../../controller/category/GetCategoryController");

api.post(
  "/createCategory",

  CreateCategory
);

api.get("/category", getCategory);

api.get("/categoryActive", getcategoryActive);

api.put("/category/:id", updateCategory);

module.exports = api;

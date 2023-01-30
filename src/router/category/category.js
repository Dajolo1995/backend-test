const express = require("express");
const api = express.Router();

const {
  CreateCategory,
  updateCategory,
} = require("../../controller/category/SetCategoryController");

const {
  getCategory,
  getCategoryId,
} = require("../../controller/category/GetCategoryController");

api.post(
  "/createCategory",

  CreateCategory
);

api.get("/category", getCategory);

api.put("/category/:id", updateCategory);

module.exports = api;

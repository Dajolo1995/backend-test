const user = require("./user/user");
const auth = require("./auth/auth");
const category = require("./category/category");
const product = require("./products/Products");
const details = require("./details/Details");
const shopee = require("./shopee/shoppeRouter");

const registerRoutes = (app) => {
  app.use("/api", user);
  app.use("/api", auth);
  app.use("/api", category);
  app.use("/api", product);
  app.use("/api", details);
  app.use("/api", shopee);
};

module.exports = registerRoutes;

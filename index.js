const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/config/db");
const dotenv = require("dotenv");

const registerRoutes = require("./src/router/index");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
dotenv.config();

db();

registerRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Run port ${PORT}`);
});

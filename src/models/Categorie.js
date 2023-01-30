const moongose = require("mongoose");

const CategoryShema = new moongose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    state: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = moongose.model("Category", CategoryShema);

module.exports = Category;

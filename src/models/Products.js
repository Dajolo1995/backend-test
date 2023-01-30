const moongose = require("mongoose");

const ProductShema = new moongose.Schema(
  {
    idCategory: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

    image: {
      type: String,

      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    state: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
  
      trim: true,
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

const products = moongose.model("Products", ProductShema)

module.exports = products
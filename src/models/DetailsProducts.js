const moongose = require("mongoose");

const DetailsProductsShema = new moongose.Schema(
  {
    idProducts: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    colors: {
      type: String,
      trim: true,
    },
    coloress: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
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

const detailsProducts = moongose.model("Details", DetailsProductsShema);

module.exports = detailsProducts;

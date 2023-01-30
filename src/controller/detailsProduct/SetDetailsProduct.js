const Products = require("../../models/DetailsProducts");

const newProductsDetails = async (req, res) => {
  try {
    let products = new Products(req.body);

    await products.save();

    return res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

module.exports = {
  newProductsDetails,
};

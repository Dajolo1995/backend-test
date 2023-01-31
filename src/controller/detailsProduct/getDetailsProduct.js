const Products = require("../../models/DetailsProducts");

const getDetailsProducts = async (req, res) => {
  try {
    const products = await Products.find();

    return res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const getDetailsProductId = async (req, res) => {
  try {
    const { idProducts } = req.body;
    const products = await Products.find({ idProducts, state: "true" });

    return res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

module.exports = {
  getDetailsProducts,
  getDetailsProductId,
};

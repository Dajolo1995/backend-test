const Products = require("../../models/Products");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    return res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const getProductId = async (req, res) => {
  try {
    const { id } = req.params;

    const products = await Products.findOne({ _id: id });

    return res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const getProductActive = async (req, res) => {
  try {
    const products = await Products.find({ state: true });

    return res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

module.exports = {
  getProducts,
  getProductId,
  getProductActive
};

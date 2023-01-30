const Products = require("../../models/Products");

const newProducts = async (req, res) => {
  try {
    const { name } = req.body;

    let products = await Products.findOne({ name });

    if (products) {
      return res.status(400).json({ msg: "Categoria ya existe" });
    }

    products = new Products(req.body);

    await products.save();

    return res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

module.exports = {
  newProducts,
};

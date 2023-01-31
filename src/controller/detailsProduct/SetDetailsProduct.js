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

const detailProductCategory = async (req, res) => {
  try {
    const { id } = req.params;

    let detailProduct = await Products.findOne({ id });

    console.log(detailProduct)

    const newUser = req.body;

    detailProduct = await Products.findByIdAndUpdate({ _id: id }, newUser, {
      new: true,
    });

    res.status(200).send(detailProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

module.exports = {
  newProductsDetails,
  detailProductCategory
};

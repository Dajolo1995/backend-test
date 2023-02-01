const DetailsProducts = require("../../models/DetailsProducts");
const Products = require("../../models/Products");

const shopee = async (req, res) => {
  try {
    const dataShopee = req.body;

    let data = [];

    for (let i = 0; i < dataShopee.length; i++) {
      //   validando producto
      const product = await Products.findOne({
        _id: dataShopee[i].idProduct,
        state: true,
      });

      if (!product) {
        return res
          .status(404)
          .send({ msg: "Sorry, we don't have this product" });
      }

      const validationDetails = dataShopee[i];

      const response = await detailsProductGet(validationDetails);

      if (!response)
        return res
          .status(404)
          .send({ msg: "Sorry, we don't have this product" });

      if (response.amount === 0) {
        return res.status(401).send({
          response,
          msg: "Sorry, we don't have this product",
        });
      }

      let responseUpdate;

      if (response.amount === 1) {
        responseUpdate = await updateDetailsProduct(
          validationDetails,
          response
        );
      }

      data.push(responseUpdate);
    }

    return res.status(200).send({
      data,
      msg: "Compra realizada",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const detailsProductGet = async (data) => {
  try {
    const product = await DetailsProducts.findOne({
      _id: data._id,
      state: "true",
    });

    if (!product) {
      return { product };
    } else {
      if (product.quantity >= data.amount) {
        console.log(product);

        return {
          amount: 1,
          product,
        };
      } else {
        return {
          product,
          amount: 0,
          quantity: `we currently have in stock ${product.quantity}`,
        };
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const updateDetailsProduct = async (data, product) => {
  const quantity = product.product.quantity - data.amount;

  let variable = {
    quantity,
    state: quantity === 0 ? "false" : "true",
  };

  const response = await DetailsProducts.findByIdAndUpdate(
    { _id: data._id },
    variable,
    {
      new: true,
    }
  );

  return response;
};

module.exports = shopee;

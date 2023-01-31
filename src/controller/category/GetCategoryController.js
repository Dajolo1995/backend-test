const Category = require("../../models/Categorie");

const getCategory = async (req, res) => {
  try {
    const categoria = await Category.find();

    return res.status(200).send({ categoria });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const getcategoryActive = async (req, res) => {
  try {
    const categoria = await Category.find({ state: true });

    return res.status(200).send(categoria);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const getCategoryId = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Category.findOne({ id });

    return res.status(200).send({ categoria });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

module.exports = {
  getCategory,
  getCategoryId,
  getcategoryActive,
};

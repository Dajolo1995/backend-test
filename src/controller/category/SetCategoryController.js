const Category = require("../../models/Categorie");

const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    let category = await Category.findOne({ name });

    if (category) {
      return res.status(400).json({ msg: "Categoria ya existe" });
    }

    category = new Category(req.body);

    await category.save();

    return res.status(200).send({ category });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const updateCategory = async(req, res) =>{
  try {
    const { id } = req.params;

    let category = await Category.findOne({ id });

    const newUser = req.body;

    category = await Category.findByIdAndUpdate({ _id: id }, newUser, {
      new: true,
    });

    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
}
 


module.exports = {
  CreateCategory,
  updateCategory
};

const Usuario = require("../../models/user");

const getUserController = async (req, res) => {
  try {
    const usuario = await Usuario.find();

    return res.status(200).send({ usuario });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ msg: "Internal error server" });
  }
};

const getUserControllerId = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findOne({ id });

    return res.status(200).send({ usuario });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ msg: "Internal error server" });
  }
};

module.exports = {
  getUserController,
  getUserControllerId,
};

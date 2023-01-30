const Usuario = require("../../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { email, password, nickName, phone } = req.body;

    let usuario = await Usuario.findOne({ email });
    const userNickName = await Usuario.findOne({ nickName });
    const userPhone = await Usuario.findOne({ phone });

    const validations = validationsUser(usuario, userNickName, userPhone);

    if (validations !== "") {
      return res.status(400).json({ msg: `${validations}` });
    }

    //Creando el nuevo usuario
    usuario = new Usuario(req.body);

    //Hashear el password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    //Guardando el nuevo usurio
    await usuario.save();

    // Crear y firmar el jwt
    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    res.json({ msg: "Ok" });
    //   }
    // );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    let usuario = await Usuario.findOne({ id });

    const newUser = req.body;

    usuario = await Usuario.findByIdAndUpdate({ _id: id }, newUser, {
      new: true,
    });

    res.status(200).send(usuario);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal error server" });
  }
};

const validationsUser = (usuario, userNickName, userPhone) => {
  let error = "";

  if (usuario) {
    error = "El correo ya existe";
  } else if (userNickName) {
    error = "El nickName ya existe";
  } else if (userPhone) {
    error = "El telefono ya esta registrado";
  }

  return error;
};

module.exports = {
  createUser,
  updateUser,
};

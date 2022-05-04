const Usuario = require("../models/usuario");

const getUsuarios = (req, res) => {
  res.json({
    mensaje: "hola",
    usuarios: [{ nombre: "manuel" }, { nombre: "pedro" }],
  });
};

const crearUsuarios = async (req, res) => {
  const { email, password, nombre } = req.body;

  const usuario = new Usuario(req.body);

  await usuario.save();

  res.json({
    mensaje: "creando usuarios",
    usuario,
  });
};

module.exports = { getUsuarios, crearUsuarios };

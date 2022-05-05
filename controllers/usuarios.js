const { response } = require("express");
const { validationResult } = require("express-validator");
const Usuario = require("../models/usuario");

const getUsuarios = async (req, res = response) => {
  const usuarios = await Usuario.find({}, "nombre email role google");
  res.json({
    ok: true,
    usuarios,
  });
};

const crearUsuarios = async (req, res = response) => {
  const { email, password, nombre } = req.body;

  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errores.mapped(),
    });
  }

  try {
    const existeEmail = await Usuario.findOne({ email });

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "existe correo",
      });
    }

    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
      mensaje: "creando usuarios",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "error",
    });
  }
};

module.exports = { getUsuarios, crearUsuarios };

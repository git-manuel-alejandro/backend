const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");

const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    //Check Email
    const usuarioDB = await Usuario.findOne({ email });
    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: "user not found",
      });
    }

    //Check password
    const validPassword = bcryptjs.compareSync(password, usuarioDB.password);
    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: "password not valid",
      });
    }

    //Create auth token
    const token = await generarJWT(usuarioDB.id);

    res.json({
      ok: true,
      msg: "loged",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "login failed",
    });
  }
};

module.exports = { login };

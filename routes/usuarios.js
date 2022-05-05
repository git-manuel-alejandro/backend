/*
    Ruta: /api/usuarios
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { getUsuarios, crearUsuarios } = require("../controllers/usuarios");

const router = Router();

router.get("/", getUsuarios);
router.post(
  "/",
  [
    check("nombre", "Nombre obligatorio").not().isEmpty(),
    check("password").not().isEmpty(),
    check("email").isEmail(),
  ],
  crearUsuarios
);

module.exports = router;

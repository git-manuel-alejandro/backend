/*
    Ruta: /api/usuarios
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const {
  getUsuarios,
  crearUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", getUsuarios);
router.post(
  "/",
  [
    check("nombre", "Nombre obligatorio").not().isEmpty(),
    check("password").not().isEmpty(),
    check("email").isEmail(),
    validarCampos,
  ],
  crearUsuarios
);

router.put(
  "/:id",
  [
    check("nombre", "Nombre obligatorio").not().isEmpty(),
    check("role", "Role obligatorio").not().isEmpty(),
    check("email").isEmail(),
    validarCampos,
  ],
  actualizarUsuario
);

router.delete("/:id", eliminarUsuario);

module.exports = router;

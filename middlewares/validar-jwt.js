const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(400).json({
      ok: false,
      msj: "please send 'x-token'",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    console.log(uid);

    return res.status(200).json({
      ok: false,
      msg: uid,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: "invalid token",
    });
  }

  next();
};

module.exports = { validarJWT };

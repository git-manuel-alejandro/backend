require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");

const app = express();

//Cors
app.use(cors());

//base de datos
dbConnection();

//Rutas
app.get("/", (req, res) => {
  res.json({ mensaje: "hola" });
});

app.listen(process.env.PORT, () => {
  console.log("server running on port ", process.env.PORT);
});

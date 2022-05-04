require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");

const app = express();

//Cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//base de datos
dbConnection();

//Rutas

app.use("/api/usuarios", require("./routes/usuarios"));

app.listen(process.env.PORT, () => {
  console.log("server running on port ", process.env.PORT);
});

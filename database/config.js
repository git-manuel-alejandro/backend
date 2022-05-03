const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.DB

      //   {
      //     userNewUrlParser: true,
      //     userUnifiedTopology: true,
      //     useCreateIndex: true,
      //   }
    );
    console.log("conected to db");
  } catch (error) {
    console.log(error);
    throw new Error("error en conexion a la base");
  }
};

module.exports = { dbConnection };

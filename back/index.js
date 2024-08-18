const app = require("./src/server");

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});


/* const mongoose = require('mongoose');

require("dotenv").config();
const { PORT } = process.env; 
const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon()
  .then(() => app.listen(PORT, "localhost", () =>
    console.log(`Servidor escuchando en el puerto ${PORT}`)
  ))
  .catch((err) => {
    console.log("Error al conectar la BDD", err.message);
  }); */

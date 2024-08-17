const express = require("express"); //Requerimos express
const router = require("./routes/"); //Ya tenemos requerido el enrutador


const app = express(); 

app.use(router); //Este moldulo se encarga de pdir app, no maneja rutas.  De eso se encarga rutas,por eso es q direcciona hacia el router la solicitud

module.exports = app;


const express = require("express"); //Requerimos express
const router = require("./routes/"); //Ya tenemos requerido el enrutador
const morgan = require("morgan");
const cors = require("cors");

const app = express(); 

// Aca quiero utilizar el middleware 
app.use(morgan("dev")); //Dentro de este paquetito, ya tengo una funcion que esta preparada para recibir la solicitud, hacer algo(luego veremos q es) y luego liberarla para que continue con su camino normal
app.use(cors()); //El servidor sabe q tiene q abrirse a recibir solicitudes de cualquier lugar de esta forma, Si le llegan peticiones de un host distinto al nuestro, este servidor no respondera a esa solicitud
app.use(express.json())//Cuando recibe la solicitud, la solicitud pasa por este middleware y convierte esa informacion (q puede haber venido en json) la convierte en objeto de javascript para q a partir de ahi ya este disponible en el resto de su camino  

//Así creo una middleware por mi cuenta 
app.use( (req, res, next)=> {
    console.log("Estamos pasando por mi propio middleware");
    next();//Tenemos q ejecutar esta funcion para que libere la request
});

app.use(router); //Este moldulo se encarga de pdir app, no maneja rutas.  De eso se encarga rutas,por eso es q direcciona hacia el router la solicitud

module.exports = app;
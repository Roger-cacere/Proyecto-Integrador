/* Nosotros vamos a poder hacerle una solicitud a una determinada ruta, esa ruta va a estar definida en routes  */

/* Aqui vamos a definir las rutas a traves de las cuales nos podemos comunicar */

//Tengo definida la solicitud a GET/users => controlador

const { Router } = require("express");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");

const router = Router(); //Estamos creando un enrutador, un objeto que tiene la capacidad de definir rutas internamente

router.use("/users", userRouter);

router.use("/posts", postRouter);

module.exports = router;


/* const {Router} = require ("express")
const moviesRoute = require('./moviesRoute')
const moviesController = require ('../controllers/moviesController')

const router = Router ()

router.use('/movies', moviesRoute)

module.exports = router */
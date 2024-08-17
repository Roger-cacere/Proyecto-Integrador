/* En este modulo van a estar las funciones que establecen la LOGICA DE NEGOCIO de cada una de las rutas*/
// Para esa ruta GET/users => 
// 1) Vamos a ir a la base de datos a pedir la informacion de los usuarios y 
// 2) Responder al cliente con la informacion obtenida
// Estas son dos operaciones distintas 


/* ¿Va a ser el controlador quien vaya a la base da datos o quien se comunique con la base de datos para pedir la informacion?
Pues no ¿Porque?
Porque en este modulo van a estar las funciones que establecen la LOGICA DE NEGOCIO de cada una de las rutas, es decir, esta funcion
controladora me va a decir que tengo que hacer, pero NO lo va a hacer

Necesitamos que alguien vaya a comunicarse con la base de datos para traernos la informacion de los usuarios y una vez que tengamos esainformacion, si
responderemos a cliente con la informacion obtenida
La tarea 1) no la va arealizar el controlador, no es su responsabilidad, el controlador solo define la Logica de negocio No ejecuta esas tareas 
De eso se encarga las funciones de servicios


Esto lo veremos mas adelante pero el controlador tambien maneja errores

*/

const userController = (req, res) => {
  res.status(200).send("Estamos recibiendo una solicitud para obtener datos del usuario");    //El controlador recibe la solicitud, pero utilizamos al parametro res para ejecutarlo: En primer lugar status(establecemos un codigo de respuesta), luego el metodo send q es para enviar la respuesta
};

const postController = (req, res) => {
  res.status(200).send("Estamos enviando informacion sobre posts");
}

module.exports = {
  userController,
  postController,
};



/* const moviesService = require ("../services/movieservice");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "Error interno del servidor", 
        error: error.message
      });
    }
  },

      postMovie: async (req, res) => {
          try {
              console.log("Datos recibidos en el controlador postMovie:", req.body);
  
              const { title, year, director, duration, genre, rate, poster } = req.body;
  
              const savedMovie = await moviesService.postMovie({
                  title,
                  year,
                  director,
                  duration,
                  genre,
                  rate,
                  poster,
              });
  
              console.log("Película guardada correctamente:", savedMovie);
  
              res.status(201).json(savedMovie);
          } catch (error) {
              console.error("Error en el controlador postMovie:", error);
              res.status(500).json({ error: "Error interno del servidor" });
          }
      },
  }; */
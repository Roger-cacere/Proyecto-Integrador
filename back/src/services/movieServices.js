//Aca voy a tener una funcion
/* Esta funcion se comunica con la base de datos para pedir la informacion de los usuarios. Y darle el formato adecuado 
 Yo voy a la base de datos, y esta misma tiene la informacion de los usuarios y tiene:
 id, nombre, nombre de usuario, email, fecha de alta, fecha de modificacion, domicilio, telefono, etc.  

 Quizas no necesito toda la info de la base de datos, imaginemos que solo necesito el id, nombre, email
 Aca es donde entra en accion el servicio:
 Es servicio se va a encargar de q la infrmacion salga unicamente lo q necesitamos
 respondera con esto => [{id, nombre,email}]


*/





/* const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },

    postMovie: async (movie) => {
        const newMovie = new Movie(movie);
        const savedMovie = await newMovie.save();
        return savedMovie;
    }
}; */

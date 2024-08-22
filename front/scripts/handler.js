const renderFilms = require("./renderFilms")
const axios = require("axios");

//con Promesas
// const getFilms = () => {
//     axios.get("https://students-api.up.railway.app/movies")
//     .then((response)=>{
//         // console.log(response);
//         response.data.map(renderFilms);
//     }).catch((error) => {
//         // console.log(error);
//         alert(error.message);
//     })
// }

//Async Await
const getFilms = async() => {
    try {
        const result = await axios.get("http://localhost:3000/movies")
        result.data.map(renderFilms);  
    } catch (error) {
        console.log(error.message);
    }
}



// const getFilms = () => {
//     $.get("https://students-api.up.railway.app/movies", (data)=> data.map(renderFilms).fail(()=>alert("Error al traer las peliculas")))
// }

module.exports = getFilms;
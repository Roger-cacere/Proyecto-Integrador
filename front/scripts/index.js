const renderCards = require("./renderCards");
const axios = require("axios"); 

const fetchData = async () => {
    try {
        const data = await axios.get("https://students-api.up.railway.app/movies")
        renderCards(data);
    }catch(error){
        console.log(error);
    }
}
fetchData();

/*Para utilizar axios hay que tener en cuenta 3 cosas importantes 

Los métodos de axios siempre retornan una promesa
Cuando axios realiza una solicitud y obtiene un resultado favorable axios resuelve la promesa
Cuando axios realiza una solicitud y no obtiene un resultado favorable, axios rechaza la promesa y arroja un error 
*/

/* $.get("https://students-api.up.railway.app/movies", (data) => {
    rederCards(data);
}).fail ((error) => {
    console.error("Error al obtener los datos", error);
})
 */

/* async function getMovies(){
    try {
        const {data} = await axios.get("https://students-api.up.railway.app/movies")
        renderCards(data);
    } catch (error){
        console.log(error);
    }
}
getMovies(); */
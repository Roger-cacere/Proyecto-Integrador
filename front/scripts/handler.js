const renderFilms = require("./renderFilms")
const axios = require("axios");
const getFilms = async() => {
    try {
        const result = await axios.get("http://localhost:3000/movies")
        result.data.map(renderFilms);  
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getFilms;
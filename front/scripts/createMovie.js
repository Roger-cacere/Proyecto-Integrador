const axios = require("axios")
const genres = [
    "Actions",
    "Comedy",
    "Fi-Ci",
    "Animation",
    "Cartoon",
    "Drama",
    "Horror",
    "Adventure"
];

const btnSubmint = document.getElementById("btnSubmit")
const btnCleaner = document.getElementById("btnCleaner")
const options = document.getElementById("options")
const title = document.getElementById("title")
const year = document.getElementById("year")
const director = document.getElementById("director")
const duration = document.getElementById("duration")
const rate = document.getElementById("rate")
const poster = document.getElementById("poster")

const renderGenres = () => {
    options.innerHTML = "";
    
    for(const genre of genres) {
        const input = document.createElement("input")
        const label = document.createElement("label")

        input.type = "checkbox"
        input.style.margin="5px"
        input.id = genre
        input.name = "genre[]"
        input.value = genre
        
        label.htmlFor = genre;
        label.textContent = genre;

        options.appendChild(input)
        options.appendChild(label)
    }
    return options
}
renderGenres();

const validateCheckbox = () => {
    const checkboxes = document.querySelectorAll('input[name="genre[]"]')
    const genres = []

    for(const item of checkboxes) {
        if (item.checked){
            item.classList.add("selected")
            genres.push(item.id)
        }
    }
    return genres
}

const handlerSubmit = (event) => {
    event.preventDefault()
    const genres = validateCheckbox()

    if (![title.value, year.value, director.value, duration.value, rate.value, poster.value, genres].every(Boolean)) return alert("Falta llenar campos en el Formulario");
    const movie = {
        title: title.value,
        year: year.value,
        director: director.value,
        duration: duration.value,
        rate: rate.value,
        poster: poster.value,
        genre: genres
    }
    const sendDataToBackend = async (movie) => {
        try {
            const response = await axios.post('http://localhost:3000/movies', movie);
        } catch (error) {
            console.error('Error al enviar datos al backend:', error);
        }
    };
    sendDataToBackend(movie)
    alert("pelicula enviada")
}



const cleanInputs = () => {
    title.value=""
    year.value=""
    director.value=""
    duration.value=""
    rate.value=""
    poster.value=""

    const checkboxes = document.querySelectorAll('input[name="genre[]"]')
    for (const item of checkboxes){
        item.checked = false;
        item.classList.remove("selected")
    }
}

btnSubmint.addEventListener("click",handlerSubmit)
btnCleaner.addEventListener("click",cleanInputs)
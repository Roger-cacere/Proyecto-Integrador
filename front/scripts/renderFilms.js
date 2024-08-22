const filmsSection = document.getElementById("films")

const renderFilms = (movie) => {
    const movieElement = document.createElement("article")
    const containerMovie = document.createElement("div")

    movieElement.classList.add("movie")
    containerMovie.classList.add("divMovie")

    movieElement.innerHTML = `<img src="${movie.poster}" alt=${movie.title}</img>`

    containerMovie.innerHTML = `
        <h3>${movie.title} - (${movie.year})</h3>
        <p><strong>Director: </strong> ${movie.director}</p>
        <p><strong>Duracion: </strong> ${movie.duration}</p>
        <p><strong>Genero: </strong> ${movie.genre.join(", ")}</p>
        <p><strong>Rate: </strong> ${movie.rate}</p>
        `
        movieElement.appendChild(containerMovie)
        filmsSection.appendChild(movieElement)
}  

module.exports = renderFilms;

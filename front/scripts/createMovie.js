const titleInput = document.getElementById("title");
const yearInput = document.getElementById("year");
const directorInput = document.getElementById("director");
const durationInput = document.getElementById("duration");
const genreInput = document.getElementById("genre");
const rateInput = document.getElementById("rate");
const posterInput = document.getElementById("poster");

function clearForm () {
  document.getElementById('title').value = '';
  document.getElementById('year').value = '';
  document.getElementById('director').value = '';
  document.getElementById('duration').value = '';
  document.getElementById('genre').value = '';
  document.getElementById('rate').value = '';
  document.getElementById('poster').value = '';
}

function validacionMovie(movie){
  const errors = [];
  
  if(!movie.title){
    errors.push('El título es requerido');
  
  }

  if(!movie.year){
    errors.push('El año es requerido');
  }else if ( movie.year.length<4){

    errors.push('El año debe ser de 4 cifras')
  }

  if(!movie.director){
    errors.push('El director es requerido');
  }

  if(!movie.duration){
    errors.push('La duracion es requerido');
  }

  if(!movie.genre){
    errors.push('El genero es requerido');
  }

  if(!movie.rate){
    errors.push('El puntaje es requerido');
  }
  
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!movie.poster || !urlRegex.test(movie.poster)) {
    errors.push('La url debe ser valida'); 
  }
  return errors;
}

const botonAgregarPelicula=document.getElementById("submitButton");

botonAgregarPelicula.addEventListener("click",()=>{
  const newMovie = { 
    title: titleInput.value.trim(),
    year: yearInput.value.trim(),
    director: directorInput.value.trim(),
    duration:durationInput.value.trim(),
    genre: genreInput.value.trim(),
    rate: rateInput.value.trim(),
    poster: posterInput.value.trim()
  };

  const errors = validacionMovie(newMovie);

  if(errors.length > 0){
    let errorMessage = "";
    for (let i = 0; i < errors.length; i++) {
      errorMessage += errors[i] + "\n";
    }
    alert(errorMessage);
  };
  sendData(newMovie);
});

  async function sendData(dataForm) {
    try {
      const response = await axios.post("http://localhost:3000/movies", dataForm);
      alert("Película agregada correctamente");
    } catch (error) {
      alert("La película no pudo ser agregada");
    }
  }
  
const botonBorrarPelicula=document.getElementById("clearButton");
botonBorrarPelicula.addEventListener("click",clearForm);
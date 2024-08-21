
const renderCards=(data)=>{
    data.map((item)=>{
     const{ title,year,director,duration,genre,rate,poster} =item ;
 
     const card =document.createElement("div");
     card.classList.add("card");
 
     const eTitle= document.createElement("h1");
     const eYear = document.createElement("h3");
     const eDirector = document.createElement ("h3");
     const eduration = document.createElement ("h3");
     const egenre =document.createElement ("h3");
     const erate=document.createElement ("h3");
     const eimg=document.createElement ("img");
 
     eTitle.innerHTML= title;
     eYear.innerHTML=year;
     eDirector.innerHTML=director;
     eduration.innerHTML=duration;
     egenre.innerHTML=genre;
     erate.innerHTML=rate;
     eimg.src=poster;
 
     card.append (eTitle,eYear,eDirector,eduration,egenre,erate,eimg);
 
     container.appendChild(card);
   })
 }
 module.exports = renderCards;


/* const contenedorTarjetas = document.querySelector(".container-cards");

function renderCards(data){
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const h2 = document.createElement("h2");
        h2.classList.add("title");
        h2.textContent = movie.title;

        const img = document.createElement("img");
        img.classList.add("imgCard");
        img.src = movie.poster;
        img.alt = movie.title;

        const info = document.createElement("div");
        info.classList.add("info");

        const h3 = document.createElement("h3");
        h3.classList.add("year");
        h3.textContent = movie.year;

        const h4 = document.createElement("h4");
        h4.classList.add("duration");
        h4.textContent = movie.duration;

        const h5 = document.createElement("h5");
        h5.classList.add("genre");
        h5.textContent = movie.genre.join(", ");

        const h6 = document.createElement("h6");
        h6.classList.add("director");
        h6.textContent = movie.director;

        const button = document.createElement('button');
        button.className = 'button-flashy';
        const linkVer = document.createElement('a');
        linkVer.textContent = "Ver Ahora";
        button.appendChild (linkVer);

        info.appendChild(h2);
        info.appendChild(h3);
        info.appendChild(h4);
        info.appendChild(h5);
        info.appendChild(h6);
        info.appendChild(button);

        card.appendChild(img);
        card.appendChild(info);

        contenedorTarjetas.appendChild(card);
    });
}

module.exports = renderCards;
 */
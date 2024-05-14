console.log(tempData);


function jsCardsToHtml(pelicula){
    
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const button = document.createElement("button")
    const img = document.createElement("img")

    img.src = pelicula.poster
    img.classList.add("cardImg")
    img.alt = pelicula.title
    img.value = pelicula.id
    img.background = pelicula.background

    h1.innerHTML = pelicula.title
    button.innerHTML = "ver ahora"

    div.classList.add("card")
    div.appendChild(img);
    div.appendChild(h1)
    div.appendChild(button)

    img.addEventListener("mouseenter",function(ele){
        const background = ele.target.background
        const body = document.querySelector("body")
        body.style.backgroundImage = `url(${background})`
    })

    return div;
}



function transformData(data){
    data.forEach((pelicula, index) =>{
        pelicula.id = index + 1;
        switch(pelicula.id){
            case 1:
                pelicula.background = "https://hips.hearstapps.com/hmg-prod/images/guardianes-de-la-galaxia-vol-3-chris-pratt-1549289460.jpg"
                break;
            case 2:
                pelicula.background = "https://www.cronista.com/files/image/459/459794/6271dccc51e51.jpg"
                break;
            case 3:
                pelicula.background = "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/4/7/7/1252477_fellowship.jpg"
                break;
            default:
                break;
        }
    });

    const arrayHtmlCards = data.map(jsCardsToHtml)
    arrayHtmlCards.forEach((pelicula) => cardsContainer.appendChild(pelicula));
}

const cardsContainer = document.querySelector("#cardsContainer");

function getData(){
    $.get("https://students-api.up.railway.app/movies", transformData)
}

getData();


let movieImage = document.getElementsByClassName("movie-image")[0];
let descriptionMovie = document.getElementsByClassName("description-movie")[0];


let id = document.location.search.slice(4);

axios.get("https://api.tvmaze.com/shows/" + id)
.then(element=>{
    movieImage.innerHTML = `<img width="500px" height="520px" src="${element.data.image.original}" alt="">`

    descriptionMovie.innerHTML = `
        <h1 class="my-5 mb-3">Фильм <br>${element.data.name}</h1>
        <p>Год: ${element.data.premiered.slice(0, 4)} | Язык: ${element.data.language} | Страна: ${element.data.network.country.name}</p>
        <span>Жанр: ${element.data.genres}</span>

        <h2 class="my-5 mb-0">Описание: </h2>
        ${element.data.summary}`
})
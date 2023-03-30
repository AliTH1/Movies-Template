let movies = document.getElementsByClassName("movies")[0];

fetch("https://api.tvmaze.com/shows")
.then(data=>data.json())
.then(json=>{
    for(let i = 0; i < 40; i++){
        movies.innerHTML +=
        `<div class="col-3 my-4">
            <img class="rounded" src="${json[i].image.medium}" alt="${json[i].name}">
            <br>
            <span class="text-light">Название: ${json[i].name}</span>
            <br>
            <span class="text-light">IMDb: ${json[i].rating.average}</span>
            <br>
            <span class="text-light">Статус: ${json[i].status}</span>
        </div>`
    }
    movies.innerHTML += "<button class='text-light bg-transparent border border-white rounded'>Показать еще</button>"
})
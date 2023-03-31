let movies = document.getElementsByClassName("movies")[0];

fetch("https://api.tvmaze.com/shows")
.then(data=>data.json())
.then(json=>{
    for(let i = 0; i < 40; i++){
        movies.innerHTML +=
        `<div class="col-3 my-4">
            <a href="details.html?id=${json[i].id}"><img class="rounded card" src="${json[i].image.medium}" alt="${json[i].name}"></a>
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




// Dersde olan sehvi verdi
// $.ajax({
//     method: "GET",
//     URL: "https://api.tvmaze.com/shows"
// }).done(json=>{
//     for(let i = 0; i < 40; i++){
//         movies.innerHTML +=
//         `<div class="col-3 my-4">
//             <a href="details.html?id=${json[i].id}"><img class="rounded card" src="${json[i].image.medium}" alt="${json[i].name}"></a>
//             <br>
//             <span class="text-light">Название: ${json[i].name}</span>
//             <br>
//             <span class="text-light">IMDb: ${json[i].rating.average}</span>
//             <br>
//             <span class="text-light">Статус: ${json[i].status}</span>
//         </div>`
//     }
//     movies.innerHTML += "<button class='text-light bg-transparent border border-white rounded'>Показать еще</button>"  
// })
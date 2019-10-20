document.addEventListener("DOMContentLoaded", function () {
    for (let category of categories) {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click", function () {
            onCategoryChoice(category)
        });
        document.querySelector(".categories").appendChild(newEl);
    }
});

function getFilmComments(filmName) {
    const film = films.filter(f => f.name === filmName)[0];
    return film.comments;
}

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        const newEl = document.createElement("div");
        newEl.classList.add("film");
        newEl.innerHTML = `<div class="film-name">${film.name}</div>`;
        newEl.addEventListener("click", function () {
            const comments = getFilmComments(film.name);
            let s = "";
            comments.forEach(c => {
                s += `<div class="comment">${c.text}</div>`;
            });
            newEl.innerHTML += `<div class="film-comments">${s}</div>`;
        });
        document.querySelector(".films").appendChild(newEl);
    }
}

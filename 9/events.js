const openedFilms = {};

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
            if (openedFilms.hasOwnProperty(film.name) && openedFilms[film.name]) {
                newEl.innerHTML = `<div class="film-name">${film.name}</div>`;
                openedFilms[film.name] = false;
                return;
            }
            const comments = getFilmComments(film.name);
            let s = "";
            comments.forEach(c => {
                s += `<div class="film-comment"><span class="comment-author">${c.author}</span>: ${c.text}</div>`;
            });
            newEl.innerHTML += `<div class="film-comments">${s}</div>`;
            const addCommentButton = document.createElement("button");
            addCommentButton.innerText = "Добавить отзыв";
            newEl.appendChild(addCommentButton);
            openedFilms[film.name] = true;
        });
        document.querySelector(".films").appendChild(newEl);
    }
}

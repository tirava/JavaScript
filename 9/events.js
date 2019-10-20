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

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        const newEl = document.createElement("div");
        newEl.classList.add("film");
        newEl.innerHTML = `<div class="film-name">${film.name}</div>`;
        newEl.addEventListener("click", function () {
            newEl.innerHTML += `<div class="film-comments">film clicked</div>`;
        });
        document.querySelector(".films").appendChild(newEl);
    }
}

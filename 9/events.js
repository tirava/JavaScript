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
        newEl.innerText = film.name;
        document.querySelector(".films").appendChild(newEl);
    }
}

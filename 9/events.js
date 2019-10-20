function onClick() {
    const films = getFilmsByCategory("Юмор");
    for (let film of films) {
        const newEl = document.createElement("div");
        newEl.classList.add("film");
        newEl.innerText = film.name;
        document.querySelector(".films").appendChild(newEl);
    }
}

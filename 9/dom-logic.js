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

function getFilmByName(filmName) {
    return films.filter(f => f.name === filmName)[0];
}

function getFilmComments(filmName) {
    const film = getFilmByName(filmName);
    return film.comments;
}

function onAddCommentClick(name) {
    const authorValue = document.getElementById("author-" + name).value;
    const commentValue = document.getElementById("comment-" + name).value;
    const film = getFilmByName(name);
    film.addComment(commentValue, authorValue, getStars(name));
    onCategoryChoice(film.category);
}

function getStars(name) {
    const s = "author-" + name + "_rating_";
    for (let i = 1; i <= 5; i++) {
        const starsValue = document.getElementById(s + "" + i).checked;
        if (starsValue === true) {
            return i;
        }
    }
    return 0;
}

function renderCommentForm(film) {
    let stars = "";
    for (let i = 5; i > 0; i--) {
        stars += `<input name="rating" value="${i}" id="author-${film.name}_rating_${i}" type="radio" />
<label for="author-${film.name}_rating_${i}" class="label_rating_common label_rating"></label>
`;
    }
    const content = `<div class="form-title">Добавьте отзыв фильму ${film.name}</div><div class="form-body">
<div class="rating_block">
${stars}
</div>
<input id="author-${film.name}" placeholder="Ваше имя" class="form-author">
<input id="comment-${film.name}" placeholder="Ваш отзыв" class="form-comment">
<button onclick="onAddCommentClick(\'${film.name}\')">Отправить</button></div>`;
    const form = document.createElement("div");
    form.classList.add("comment-form");
    form.innerHTML = content;
    form.addEventListener("click", function (event) {
        event.stopPropagation();
        form.classList.add("chosen")
    });
    return form;
}

function openFilmCard(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach(c => {
        let stars = "";
        for (let i = 5; i > 0; i--) {
            const onOff = (c.stars < i) ? "off" : "on";
            stars += `<input name="rating_off" value="${i}" id="rating_off_${i}" type="radio" />
<label for="rating_off_${i}" class="label_rating_common label_rating_${onOff}"></label>
`;
        }
        s += `
<div class="rating_block">
${stars}
</div>
`;
        s += `<div class="film-comment"><span class="comment-author">${c.author}</span>: ${c.text}</div>`;
    });
    newEl.innerHTML += `<div class="film-comments">${s}</div>`;
    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    addCommentButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);
}

function onFilmClick(film, newEl) {
    if (openedFilms.hasOwnProperty(film.name) && openedFilms[film.name]) {
        newEl.innerHTML = `<div class="film-name">${film.name}</div>`;
        openedFilms[film.name] = false;
    } else {
        openFilmCard(film, newEl);
        openedFilms[film.name] = true;
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = `<div class="film-name">${film.name}</div>`;
    newEl.addEventListener("click", function () {
        onFilmClick(film, newEl);
    });
    document.querySelector(".films").appendChild(newEl);
}

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        renderFilm(film);
    }
    films.forEach(film => openedFilms[film.name] = false);
}

const categories = ["Юмор", "Ужастики"];
const films = [];

class Comment {
    constructor(text, author, stars) {
        this.text = text;
        this.author = author;
        this.stars = stars;
    }
}

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = cat;
        this.comments = [];
    }
    addComment(text, author, stars) {
        this.comments.push(new Comment(text, author, stars));
    }
}

films.push(new Film("Титаник", 0));
films[0].addComment("очень милый фильм", "user", 4);
films.push(new Film("Один дома", 0));
films[1].addComment("очень смешной фильм", "user", 5);

console.log(films);
console.log(films[0].comments[0]);
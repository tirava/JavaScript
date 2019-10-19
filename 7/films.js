const categories = ["Комедии", "Ужастики"];
const films = [];

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = cat;
    }
}

films.push(new Film("Титаник", "Комедии"));

console.log(films);
console.log(films[0].name);
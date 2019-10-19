// Игра в выживание птичек. Цель игры: выяснить, какая птичка съест больше всего своих сородичей.
// Алгоритм решения:
// 1. Создайте класс Bird.
// 2. Добавьте птичке свойства name, points, wasEaten.
// 3. Создайте 10 птичек с именами Bird 1, Bird 2, ..... Bird 3.
// 4. Запустите цикл: до тех пор, пока не останется только одна живая птичка.
//  - Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую
//  - (та, которая съедена, становится wasEaten=true, а та, которую покормили, — point++).

const numBirds = 10;
const birds = [];

class Bird {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.wasEaten = false;
    }
}

// generate birds
for (let i = 1; i <= numBirds; i++) {
    birds.push(new Bird("Bird " + i));
}

// game loop
for (let leftBirds = numBirds; leftBirds > 1;) {
    const bird1 = Math.floor(Math.random() * 10);
    const bird2 = Math.floor(Math.random() * 10);
    if (bird1 === bird2) { // no self eating
        continue
    }
    if (birds[bird1].wasEaten || birds[bird2].wasEaten) { // no eat eaten
        continue;
    }
    birds[bird2].wasEaten = true;
    birds[bird1].points++;
    leftBirds--;
}

// print results
for (let i = 0; i < numBirds; i++) {
    if (!birds[i].wasEaten) {
        console.log("Win Bird", i + 1, "with points", birds[i].points);
        break;
    }
}
console.log(birds);
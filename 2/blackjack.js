// Федор и Петр играют в блэкджек.
// Набранные ими очки хранятся в виде числа в двух переменных fedorPoints и petrPoints.
// Нам нужно:
//  - сохранить любые два числа в эти переменные,
//  - вывести, кто из игроков победил.
// Правила блэкджека:
// Выигрывает тот, кто набрал число очков, максимально близкое к 21 (20 выигрывает у 19).
// Но первый, кто превысит 21 хоть на 1, — проиграл (19 выигрывает у 22).

const winPoints = 21;

let fedorPoints = 20,
    petrPoints = 19;

// 1-й вариант - if else
if (fedorPoints <= winPoints && (fedorPoints > petrPoints || petrPoints > winPoints)) {
    console.log("Фёдор, ты выиграл!")
} else if (petrPoints <= winPoints && (petrPoints > fedorPoints || fedorPoints > winPoints)) {
    console.log("Пётр, ты выиграл!")
} else if (fedorPoints + petrPoints > 42) {
    console.log("Вы оба проиграли!")
} else {
    console.log("Ничья!")
}

// 2-й вариант - ternary
let message =
    (fedorPoints <= winPoints && (fedorPoints > petrPoints || petrPoints > winPoints)) ? "Фёдор, ты выиграл!" :
        (petrPoints <= winPoints && (petrPoints > fedorPoints || fedorPoints > winPoints)) ? "Пётр, ты выиграл!" :
            (fedorPoints + petrPoints > 42) ? "Вы оба проиграли!" :
                "Ничья!";
console.log(message);
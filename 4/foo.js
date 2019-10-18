// Написать функцию foo, считающую произведение элементов подобным образом:
// foo(5)(2)() = 10
// foo(5)() = 5
// foo(2)(1)(3)(4)() = 24

let result = 1;

const foo = function (x) {
    if (!x) {
        const tmp = result;
        result = 1;
        return tmp
    }
    result *= x;
    return function (y) {
        return foo(y)
    }
};

console.log("result foo(5)(2)(): ", foo(5)(2)());
console.log("result foo(5)(): ", foo(5)());
console.log("result foo(2)(1)(3)(4)(): ", foo(2)(1)(3)(4)());

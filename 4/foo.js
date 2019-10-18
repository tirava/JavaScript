// Написать функцию foo, считающую произведение элементов подобным образом:
// foo(5)(2)() = 10
// foo(5)() = 5
// foo(2)(1)(3)(4)() = 24

function foo(x) {
    if (!foo.result) {
        foo.result = 1;
    }
    if (!x) {
        const tmp = foo.result;
        foo.result = 1;
        return tmp;
    }
    foo.result *= x;
    return function (y) {
        return foo(y);
    }
}

console.log("result foo(5)(2)(): ", foo(5)(2)());
console.log("result foo(5)(): ", foo(5)());
console.log("result foo(2)(1)(3)(4)(): ", foo(2)(1)(3)(4)());

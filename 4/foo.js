// Написать функцию foo, считающую произведение элементов подобным образом:
// foo(5)(2)() = 10
// foo(5)() = 5
// foo(2)(1)(3)(4)() = 24

// function foo(x) {
//     if (!x) {
//         const tmp = foo.result;
//         foo.result = undefined;
//         return tmp;
//     }
//     if (!foo.result) {
//         foo.result = 1;
//     }
//     foo.result *= x;
//     return foo;
// }

function foo(a) {

    let currentResult = a;

    function f(b) {
        if (b === undefined) return currentResult;
        currentResult *= b;
        return f;
    }

    f.toString = () => currentResult;

    return f;
}

console.log("result foo(): ", foo());
console.log("result foo(5)(2)(): ", foo(5)(2)());
console.log("result foo(5)(): ", foo(5)());
console.log("result foo(2)(1)(3)(4)(): ", foo(2)(1)(3)(4)());
console.log("result foo(): ", foo());

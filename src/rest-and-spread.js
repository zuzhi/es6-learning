// rest operator
function sum(foo, ...numbers) {
    console.log(foo);
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum("sum", 1, 2, 3)); // 6
console.log(sum("sum", 1, 2, 3, 4, 5, 6)); // 6

// spread operator
function sum2(x, y) {
    return x + y;
}

let nums = [1, 2, 3];

console.log(sum2(...nums));
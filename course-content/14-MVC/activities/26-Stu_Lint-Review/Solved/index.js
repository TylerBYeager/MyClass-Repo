const numbers = [2, 4, 6, 8];
let squaredNums;

if (numbers.length > 0) {
  squaredNums = numbers.map((num) => {
    return num ** 2;
  });
}

// var x = foo["bar"];
var x = foo.bar;
console.log(x);

console.log(squaredNums);

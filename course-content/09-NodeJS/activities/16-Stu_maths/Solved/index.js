const maths = require('./maths');
// You can't selectively load only the pieces you need with require but with import, you can selectively load only the pieces you need, which can save memory.
// https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// import { readFile } from "fs";

const operation = process.argv[2];

const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

switch(operation){
    case "+":
        totalNum = maths.sum(numOne, numTwo)
        console.log(totalNum);
        break;
    case "-":
        totalNum = maths.difference(numOne, numTwo)
        console.log(totalNum);
        break;
    case "*":
        
        totalNum = maths.product(numOne, numTwo)
        console.log(totalNum);
        break;
    case "/":
        totalNum = maths.quotient(numOne, numTwo)
        console.log(totalNum);
        break;
                
}
// Find average value of an array of numbers
// 3. Calling sum() in the outer function executes the inner function, which returns the sum of the numbers in the array.
function avg(array) {
  // 1. The variables total and i are declared in the inner function sum(). Therefore neither variable can be accessed in the scope of the outer function arg() and can be considered private variables.
  // This was the cause of the error which failed the tests.
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    // total is accessible in the sum's execution context
    // 2. By adding the statement return total to the inner function sum(), we explicitly end the function's execution, remove the function execution context, pop sum() off the call stack, and assign the value of total to where sum() was called.
    return total;
    //return total/array.length;//why is this an issue
  }
  return sum();
  // value of total is returned to where sum() is invoked
  return sum()/array.length;
}

module.exports = avg;

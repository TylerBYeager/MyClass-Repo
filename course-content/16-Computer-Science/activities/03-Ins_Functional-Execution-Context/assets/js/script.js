// 'use strict'
// First, the value passed as this to a function in strict mode is not forced into being an object (a.k.a. "boxed").
// Thus for a strict mode function, the specified this is not boxed into an object, and if unspecified, this will be undefined:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#securing_javascript

// In the browser, the keyword 'this' in the Global Execution Context is the window object
const globalThis = this;
function myFuncA() {
  console.log('globalThis', globalThis);
  console.log('myFuncAThis', this);
  // since this was not assigned by the call, it will default to the global object
  console.log(globalThis === this);
}

myFuncA();

const objB = {
  myFuncB: function () {
    console.log('globalThis', globalThis);
    console.log('myFuncBThis', this);
    // In the FEC, a new reference to this is created
    console.log("myFuncB: ", globalThis === this);
  }
};

objB.myFuncB();

// arrow function does not have its own bindings to this 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const objB = {
  myFuncB:  () =>  {
    console.log('globalThis', globalThis);
       refers to the window - arrow function does not have its own bindings to this 
    console.log('myFuncBThis', this);
    // In the FEC, a new reference to this is created
    console.log("myFuncB: ", globalThis === this);
  }
};

// keyword this reference depends on how the function is called


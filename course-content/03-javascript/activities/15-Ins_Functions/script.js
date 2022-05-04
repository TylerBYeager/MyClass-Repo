// Functions are reusable blocks of code that perform a specific task
// This is a function declaration 


function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
  // console.log("Meow");
}

// This is a function expression
var expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  return;
};

// Functions must be called to execute
declareHello(); 
expressHello();

//Functions can be called again to make the block of code execute again
declareHello(); 
declareHello(); 
declareHello(); 
declareHello(); 
expressHello();
expressHello();
expressHello();
expressHello();
expressHello();


// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x,y,z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z );
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);
declareHelloAgain(13, "Meow", "bacon");



//Hoisting - Hoisting is JavaScript's default behavior of moving declarations to the top.
//Hoisting is JavaScript's behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
    console.log(thing);//undefined
    var thing = "cat";
    console.log(thing);//'cat'

    // funExpression("Farley");//Uncaught TypeError: funExpression is not a function

     var funExpression = function(params){
        console.log("Hello " + params);
      };

     funExpression("Farley");

     declaration("Asher Baba");

     function declaration(placeholder){
      console.log("Hello " + placeholder);
     };

     declaration("Asher Baba");


     function funDeclaration(){
      console.log("Hello Kitty" );
     };

     funDeclaration()


// ===========

var lastName = "wittles"
var title = "sir"

function sayName(lastName){
  var firstName = "farley";
  console.log(firstName + " " + lastName + title);
};


sayName("wittles");//"Farley Wittles"
sayName("Furrball");//"Farley Furrball"
sayName("The Cute");//"Farley The Cute"

function catMeow(){
  console.log(firstName);
}

sayName("bob");// "bob wittles"
sayName("sally");// "sally wittles"


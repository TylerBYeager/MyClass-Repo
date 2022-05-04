

var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
//Arrays have access to built-in methods that allow us to manipulate arrays and the 
//elements they hold.

//Array methods are easy to use. We simply use the name of the array, followed by a dot ., 
//and the name of the method with parentheses (). The sort() method, shown in the following 
//example, sorts the elements in an array in alphabetical and ascending order:

comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
//Some array methods take arguments. We put the argument value in the parentheses (). 
//The push() method attaches the value placed in the parentheses () at the end of an array, 
//as shown in the following example:
arithmaticOperators.push("/");

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
//Array methods can also return a new array. 
//The slice() method returns a slice of an array as a new array. 
//The arguments determine which indexes to use to start and end the slice. 
//You can see the following statement for an example:
var logicalOperatorsSliced = logicalOperators.slice(0,2);

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
//Strings also have methods. The replace() method will return a new string. 
//In that new string, "String" is replaced with "World". 
//You can see this at work in the following example:
var myNewString = myString.replace("String", "World");
console.log(myNewString);

//The orginal string is unchanged
console.log(myString);

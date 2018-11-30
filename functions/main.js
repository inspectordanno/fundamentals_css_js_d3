//Functions can be named

//hate and love are the "parameters", or arguments, or the function. 
//Whatever goes in them is passed down and used throughout the function.
function vegetables(hate, love) { 
  console.log('I hate ' + hate)
  console.log('I love ' + love);
}

vegetables('oranges', 'apples'); //we pass in the oranges and apples string for each argument, and they get used in the function

//This is how a function can redfine a variable:

let greeting = 'hello'; //greeting equals hello

console.log(greeting) //what does this equal?

function sayHi() { //here, we are setting greeting to 'hey'
  greeting = 'hey'
  console.log(greeting) //what does this equal?
}

sayHi(); //this runs the function

console.log(greeting); //what does this equal? 

//function expression

//functions can be stored in a variable, too. These are called function expressions.

const chocolate = function() {
  console.log('Dang I really want some chocolate.')
}

chocolate();

//functions can be passed in as arguments into other functions. This called a callback function.

function tired(knicknack, calculateOfficeFurniture) {
  console.log('My ' + knicknack + ' hit the ' + calculateOfficeFurniture + ' because I am so dang tired.')
}

const furniture = ['desk', 'chair', 'stepstool'];

function getStepStool() {
  return furniture[1];
}

tired('Hawaii hula hoop snowglobe', getStepStool());

////A confusing this is that the function above can also be actually anonymous. It does not have
//a name like the function at the very top, i.e. function Name(). So that means
//the anonymous function cannot be reused or called elsewhere. This is good
//when we want to keep the code light, but bad if we have to actually reuse functions.

//check this anonymized version out:

tired('Jigsaw puzzle', (function() {
  return furniture[2];
})());

//Above is bit of a weird example - we had to actually invoke the function so the result could be passed to the
//calculateOfficeFurniture parameter. A function that invokes itself is called an immediately invoked
//function expression. This brings us to our next section.

//Immediately invoked function expressions and closures

//This section is tough and more of an intermediate-level concept, do not stress if it is confusing.
//I'd recommend reading over those links to learn more.

//https://www.w3schools.com/js/js_function_closures.asp
//https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6

//Read David's post to learn more about how this code works:
//https://stackoverflow.com/questions/53505367/why-does-one-counter-work-and-the-other-doesnt-closures

const addVersionOne = function() {
  let counter = 0;
  return function() {
    counter += 1;
    return counter;
  }
}

var addVersionTwo = (function () {
  let counter = 0;
  return function() {
    counter += 1; 
    return counter;
  }
})();

function writeVersionOne(){
  document.getElementById("addVersionOne").innerHTML = addVersionOne();
}

function writeVersionTwo(){
  document.getElementById("addVersionTwo").innerHTML = addVersionTwo();
}
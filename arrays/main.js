//Arrays

//This is an array

const lipbalms = ['chapstick', `burt's bees`, 'cheap but suspect store brand'];

//How to access arrays

//chapstick
lipbalms[0];

//a little more complicated, bringing in loops

for (let i = 0; i < lipbalms.length; i++) {
  console.log(lipbalms[i]);
}

//how does this work? 
//1.The loop runs 3 times, from 0 to lipbalms.length (3).
//2. Each time, the current i accesses the array, and the result is logged to the screen.

//Array Functions

//I personally use functions to deal with arrays. It is entirely a personal preference.
//Read this article for more info: https://thejsguy.com/2016/07/30/javascript-for-loop-vs-array-foreach.html

//In this section, we will be adding two to each number in an array,
//by using two of the most important functions in JavaScript.

//array.forEach()

const originalNumbers = [1,2,3]

const NewArray = originalNumbers.forEach(function(d) {
  return d + 2;
});

console.log(NewArray); //why is this blank? because .forEach does not return an array!

//to solve this, we have to push to an empty array

const emptyArray = [];

originalNumbers.forEach(function(d) {
  emptyArray.push(d+2)
});

console.log(emptyArray); //[3,4,5]

//array.map()
//however, array.map() DOES return a new array! So it is more efficient to use array.map() instead, when an array needs to be returned:

const mappedArray = originalNumbers.map(function(d) {
  d+2;
})

console.log(mappedArray); //why is this still blank? because we have to use return to "return" the input to the function.
// The concept of return is very confusing. Basically, any time the results of a function need to be stored in 
//a variable, or passed to another function, we need to use the return key to pass the result of the 
//function onto the next step. //This return is DIFFERENT than the return of array.map()

const mappedArrayReturned = originalNumbers.map(function(d) {
  return d+2;
})

console.log(mappedArrayReturned); //[3,4,5]

//Here's how to think about the above code:
//1. OriginalNumbers.map() iterates through every number (d) in the array
//2. For every number, a new number, d+2, is returned to the array.map() function.
//3. Lastly, the array.map() function returns a new array, which is stored in mappedArrayReturned.
//4. This new array is what is logged.
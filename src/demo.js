// functions
// num1 num2 paramaters
const add = (num1, num2) => {
  return num1 + num2;
};

const minus = (num1, num2) => {
  return num1 - num2;
};

const callFunc = (foo) => {
  return foo(1, 1);
};

// another way to define a function
// expecting the user of my function to pass me a string
function wordCount(words) {
  // if it is empty string return 0
  if(words === '') {
      return 0
  } 
  //TODO ' ' is not working
  //words is  a string
  // now that i have string how do count the words in a string?
  let wordArray = words.split(" ");
  return wordArray.length;
}

// expecting this function to be given
// a string of words separted by spaces
// it should return the number words

// Old way of doing (new way next week)
module.exports = {
  add,
  callFunc,
  minus,
  wordCount,
};
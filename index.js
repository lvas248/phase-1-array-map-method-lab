const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => capitalizeFirstLetter(sentence))
  }
 
/*
1) Take tutorial title and identify words:
- .split(" ")- method that takes an arguments and splits up a string based on argument
- let newSentence = sentence.split(" ");

2) Capitalize the first letter of each word:
word = word[0].toUpperCase() + word.substring(1, word.length);

*/
function capitalizeFirstLetter(sentence){
  let newSentence = sentence.split(" ");
  let string = [];
  for(let word of newSentence){
    word = word[0].toUpperCase() + word.substring(1, word.length);
    string = string + word + " ";
  }
  return string.trim();
}
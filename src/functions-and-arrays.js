// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 >= number2) {
    return number1;
  } else {
    return number2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array = []) {
  if (array.length == 0) {
    return null;
  }
  let longestWord = "";
  array.forEach((word) => {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array = []) {
  let sum = 0;
  if (array.length == 0) {
    return sum;
  }
  array.forEach((number) => {
    sum += number;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array = []) {
  let average = 0;
  if (array.length == 0) {
    return average;
  }
  let sum = sumNumbers(array);
  average = sum / array.length;
  return average;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array = [], word = "") {
  result = false;
  if (array.length == 0 || word.length == 0) {
    return null;
  }
  array.forEach((wordInTheArray) => {
    if (wordInTheArray == word) {
      result = true;
    }
  });
  return result;
}

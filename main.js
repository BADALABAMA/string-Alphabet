// const englishAlphabet = [];

// for (let i = 1; i <= 26; i++) {
//   const letter = String.fromCharCode(96 + i);
//   englishAlphabet[i] = letter;
// }

// console.log(englishAlphabet);

// const userWord = prompt('Enter word');

// const userWordArray = userWord.split('');

// const letters = userWordArray.map((letter) => {
//   const index = englishAlphabet.indexOf(letter);
//   return index;
// });

// console.log(letters);

const letters = 'abcdefghijklmnopqrstuvwxyz';
const letterArray = letters.split('');
const word = 'abc';
const wordArray = word.split('');

const getIndex = wordArray.map((word) => {
  const index = letterArray.indexOf(word) + 1;
  return index;
});
console.log(getIndex);

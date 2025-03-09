function isPalindrome(word) {

  // save lowercase of word to variable originalWord
  let originalWord = word.toLowerCase();
  
  // declare a variable for letter 
  let letter;

  // declare a variable reverseArray and assign to empty array 
  let reverseArray = [];

  // iterate through each letter of originalWord from the last letter to the first 
  // take the last letter and add it to reverseArray
  for (i = originalWord.length -1; i>=0; i--){
    letter = originalWord[i];
    reverseArray.push(letter);
  }

  // join reverseArray as one string to variable secondWord
  let secondWord = reverseArray.join('')

  // Use if statement to compare if originalWord is equal to secondWord
  if (originalWord == secondWord){
    return true 
  }
  else {
    return false
  }

}

/* 
  Add your pseudocode here
  1. Save lowercase of word to variable originalWord
  2. Declare a variable for letter 
  3. Declare a variable reverseArray and assign to empty array 
  4. Iterate through each letter of originalWord from the last letter to the first 
      take the last letter and add it to reverseArray
  5. Join reverseArray as one string to variable secondWord 
  6. Use if statement to compare if originalWord is equal to secondWord
*/

/*
  Add written explanation of your solution here
  I need a function that will give me a word with its letters in reverse 
  and compare that word in reverse to the original word. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

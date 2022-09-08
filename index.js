function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length; i++) {
    for (let j = word.length - 1; j >= 0; j--) {
      return word[i] === word[j] ? true : false;
    }
  }
}
/* 
  Add your pseudocode here
  //loop the strings
  //match the last letter to the first
*/

/*
  Add written explanation of your solution here
  //looping the elements of the string, they are now individual elements
  //the individual elements can now be compared using the strict logical operator
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

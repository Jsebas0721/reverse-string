function reverseString(str) {
  // type your code here
  const string = str.split("");
  let newString = "";
  for (let i = string.length - 1; i >=0 ; i--){
    newString += string[i]
  }
  return newString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 
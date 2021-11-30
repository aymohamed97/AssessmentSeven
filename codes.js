//PROBLEM ONE
let arr = [28, 43, -12, 30, 4, 0, 12];

let value = "False";
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        value = "True";
      }
    }
  }
}

console.log(value);
//runtime = O(n^2) SC:O(n)

//PROBLEM TWO
function hasUniqueChars(word) {
    let uniqueChars = new Set([]);
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i]);
    }
    return uniqueChars.size === word.length;
  }
console.log(hasUniqueChars("monday"));
console.log(hasUniqueChars("moonday"));
//O(n) SC:O(n)

//PROBLEM THREE
function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }
 console.log(pangrams("We promptly judged antique ivory buckles for the prize"))
 //O(n) SC:O(n)

 //PROBLEM FOUR
 
function findLongestWord(arr) {
    let longestWordLength = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWordLength) {
        longestWordLength = arr[i].length;
      }
    }
    return longestWordLength;
  }
//O(n) SC:O(n)
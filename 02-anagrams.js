function firstAnagram(str1, str2) {
  // Code goes here ....
  // iterate through first string = str1;
  //for each index, see if it exists in str2, using indexOf;
  // if true, use splice();
  // return true if str2 is empty after loop of str1 ends.

  for (let i = 0; i < str1.length; i++){
    let char = str1[i];
    let char2 = str2.indexOf(char);
    if (char2 !== -1) {
      let strBeginning = str2.slice(0, char2);
      let strEnd = str2.slice(char2 + 1);
      str2 = strBeginning + strEnd;
    }
    if (str2 === "") {
      return true;
    }
  }
  return false;
}
console.log(firstAnagram("gizmo", "sally"));    // => false
console.log(firstAnagram("elvis", "lives"));    // => true


// function secondAnagram(str1, str2) {
//   // Code goes here ....
// }


// function thirdAnagram(str1, str2) {
//   // Code goes here ....
// }


// function fourthAnagram(str1, str2) {
//   // Code goes here ....
// }

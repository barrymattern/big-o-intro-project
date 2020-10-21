// O(n^2)
// function firstAnagram(str1, str2) {
//   for (let i = 0; i < str1.length; i++){        //   O(n)
//     let char = str1[i];                         //   O(1)
//     let char2 = str2.indexOf(char);             //   O(n)
//     if (char2 !== -1) {                         //   O(1)
//       let strBeginning = str2.slice(0, char2);  //   O(n)
//       let strEnd = str2.slice(char2 + 1);
//       str2 = strBeginning + strEnd;
//     }
//     if (str2 === "") {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(firstAnagram("gizmo", "sally"));    // => false
// console.log(firstAnagram("elvis", "lives"));    // => true


function secondAnagram(str1, str2) {
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2 ? true : false;
}

console.log(secondAnagram("gizmo", "sally"));    // => false
console.log(secondAnagram("elvis", "lives"));    // => true

// function thirdAnagram(str1, str2) {
//   // Code goes here ....
// }


// function fourthAnagram(str1, str2) {
//   // Code goes here ....
// }

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

// T = O(n)
function secondAnagram(str1, str2) {
  let sortedStr1 = str1.split("").sort().join(""); // O(n)
  let sortedStr2 = str2.split("").sort().join(""); // O(n)

  return sortedStr1 === sortedStr2 ? true : false; //O(1)
}

// console.log(secondAnagram("gizmo", "sally"));    // => false
// console.log(secondAnagram("elvis", "lives"));    // => true

function thirdAnagram(str1, str2) {
  // Code goes here ....
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++){
    //str1[0], we want letter to be key, and index to be value;
    let char = str1[i];
    let char2 = str2[i]
    if (obj1[char] !== undefined) {
      obj1[char] += 1;
    } else {
      obj1[char] = 1;
    }

    if(obj2[char2] !== undefined){
      obj2[char2] += 1;
    } else {
      obj2[char2] = 1;
    }
  }
  // console.log("obj1", obj1);
  // console.log("obj2", obj2);

  return obj1 === obj2;


}

console.log(thirdAnagram("gizmo", "sally"));    // => false
console.log(thirdAnagram("elvis", "lives"));    // => true

// function fourthAnagram(str1, str2) {
//   // Code goes here ....
// }

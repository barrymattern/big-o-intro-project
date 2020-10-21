// T = O(n^2)
function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === targetSum) {
        return true;
      }
    }
  }

  return false;
}

const arr = [0, 1, 5, 7];
// console.log(badTwoSum(arr, 6)); // => should be true
// console.log(badTwoSum(arr, 10)); // => should be false


function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
  // let sorted = arr.sort(); // O(nlogn)
  let sumArray = [];

  for (let i = 0; i < arr.length/2; i++){
    let num1 = arr[i];
    let num2Idx = arr.length - 1;
    let num2 = arr[num2Idx];

    console.log(num1, num2)
    if (num1 + num2 > targetSum) {
      num2Idx--;
      num2 = arr[num2Idx];
    } else if (num1 + num2 < targetSum) {
      num1 = arr[i + 1];
    }
  }
}
console.log(okayTwoSum1(arr, 6)); // => should be true
// console.log(okayTwoSum1(arr, 10)); // => should be false


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}

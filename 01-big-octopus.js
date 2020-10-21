// Sluggish Octopus
function quadraticBiggestFish(fishes) {
  let biggestFish;

  for (let i = 0; i < fishes.length; i++) {
    for (let j = i + 1; j < fishes.length; j++) {
      if (fishes[i].length > fishes[j].length) {
        biggestFish = fishes[i];
      } else {
        biggestFish = fishes[j];
      }
    }
  }

  return biggestFish;
}

const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];


// console.log(quadraticBiggestFish(fishies)); // => "fiiiissshhhhhh";

// function _nlognBiggestFish(fishes) {
//   // Code goes here ...
//   if (fishes.length < 2) return fishes;

//   let pivot = fishes.shift();
//   let left = fishes.filter(fish => fish.length < pivot.length);
//   let right = fishes.filter(fish => fish.length >= pivot.length);

//   let sortedFish = [..._nlognBiggestFish(left), pivot, ..._nlognBiggestFish(right)];

//   return sortedFish;
// }

// function nlognBiggestFish(fishes) {
//   let sorted = _nlognBiggestFish(fishes);
//   return sorted[sorted.length - 1];
// }

// function nlognBiggestFish(fishes) {
//   let sorted = fishes.sort((fish1, fish2) => {
//     return fish2.length - fish1.length;
//   });

//   return sorted[0];
// }

// console.log(nlognBiggestFish(fishies)); // => "fiiiissshhhhhh";


function linearBiggestFish(fishes) {
  let biggestFish = fishes[0];

  for (let i = 1; i < fishes.length; i++) {
    if (biggestFish.length < fishes[i].length) {
      biggestFish = fishes[i];
    } 
  }

  return biggestFish;
}

console.log(linearBiggestFish(fishies));

// tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
// function slowDance(direction, tilesArray) {
//   // Code goes here ...
// }


// tilesObj = {
//   "up": 0,
//   "right-up": 1,
//   "right": 2,
//   "right-down": 3,
//   "down": 4,
//   "left-down": 5,
//   "left": 6,
//   "left-up": 7
// }
// function fastDance(direction, tilesObj) {
//   // Code goes here ...
// }

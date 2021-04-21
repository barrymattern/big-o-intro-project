const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

function quadraticBiggestFish(fishes) {
  let longestFishLength = 0;
  let longestFish = null;

  for (let i = 0; i < fishes.length; i++) {
    let currFish = fishes[i];

    if (currFish.length > longestFishLength) {
      longestFishLength = currFish.length;
      longestFish = fishes[i];
    }
  }

  return longestFish;
}

console.log(quadraticBiggestFish(fishies));


function nlognBiggestFish(fishes) {
  // Code goes here ...
}


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}

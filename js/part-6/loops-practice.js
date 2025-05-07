// 1.find the "chai" in a for loop and store it an array

let arr = ["green tea", "oolong tea", "chai", "black tea"];
let selectedteas = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "chai") {
    break;
  }
  selectedteas.push(arr[i]);
}
// console.log(selectedteas);

// 2.skip a city "paris" using for loop

let cities = ["london", "NY", "paris", "berlin"];
let visited = [];
for (let index = 0; index < cities.length; index++) {
  if (cities[index] === "paris") {
    continue;
  }
  visited.push(cities[index]);
}
// console.log(visited);

// 3.for-of loop

let numbers = [1, 2, 3, 4, 5];
let smallnumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallnumbers.push(numbers);
}

// 4.

let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredteas = [];
for (const ind of tea) {
  if (ind === "herbal tea") {
    continue;
    // no need to put index here ,straight index valus can be used
  }
  preferredteas.push(ind);
}
// console.log(preferredteas);

// 5.

let citiespopulation = {
  london: 8900000,
  "New york": 8400000,
  paris: 2200000,
  berlin: 3500000,
};

let citypop = {};
for (const city in citiespopulation) {
  // key=value
  if (city === "berlin") {
    break;
  }
  citypop[city] = citiespopulation[city];
}
console.log(citypop);

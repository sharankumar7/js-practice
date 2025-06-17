function gigga(name, age) {
  this.name = name;
  this.age = age;
}

function car(model, year) {
  this.model = model;
  this.year = year;
}

let sharanCar = new car("s+", "2024");
// console.log(sharanCar);

let nigga1 = new gigga("sharan", "23");
console.log(nigga1);

// for objects always use new keyword or else it will return undefined

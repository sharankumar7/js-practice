// old school way to do
// function People(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// let person1 = new People("sharan", 23, "Male");
// // console.log(person1);

// new way to do
class person {
  constructor(age) {
    this.age = age;
  }
  greet() {
    return this.age;
  }
  start() {
    return `hii im from us`;
  }
}
let Pea = new person(22);
// console.log(People);
// console.log(People.greet());
class inherit_person extends person {
  state() {
    return `im from texas`;
  }
}
let people_inherit = new inherit_person(23);
console.log(people_inherit.greet());
console.log(people_inherit.start());
console.log(people_inherit.state());

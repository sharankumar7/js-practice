//1.declare a arr and assign first value to a var

let TeaFlavors=['green tea','black tea','oolong tea']
let FirstTea =TeaFlavors[0]
// console.log(FirstTea); 

// 2.array of cities and 3rd ele assiging to a var

let cities =['london','tokyo','paris','New York']
let favorCity = cities[2]
// console.log(favorCity);

// 3.reassiging a value in the array

let teaTypes=['herbal tea','white tea','masala tea']
teaTypes[1]='jasmine tea'
// console.log(teaTypes);

// 4.push a val in arr using two methods

let citiesVisited=['mumbai','sydney']
citiesVisited.push("berlin")
citiesVisited[3]="bengaluru"
citiesVisited[citiesVisited.length-1]="chennai"
// console.log(citiesVisited);

// 5.remove a ele using pop method

let teaOrders=['chai','iced tea','matcha','earl grey']
let popped=teaOrders.pop()
// console.log(teaOrders,popped);

// 6.cloning a arr

let popularTeas=['green tea','oolong tea','chai']
let softCopiesTea = [...popularTeas]
popularTeas.push('tea')
// console.log(popularTeas);
// console.log(softCopiesTea);

// 7.creating hardcopies

let topCities=['berlin','singapore','new york']
let hardcopycities =[...topCities]
// another way to copy
let copycity =topCities.slice()
// console.log(copycity);

// 8.joining 2 arrays

let europeancities=['paris','rome']
let asiancities=['tokyo','bangkok']
// let mixed=[...europeancities,...asiancities]
let mixed=europeancities.concat(asiancities)
// console.log(mixed);

// 9.store the length in a var

let teamenu=['masala chai','oolong tea','green tea','earl grey']
let menulength=teamenu.length
// console.log(menulength);

// 10.check present or not

let citybucketlist=['kyoto','london','capetown','vancouver']
// for (let i = 0; i < citybucketlist.length; i++) {
//     // const element = array[i];
//     if (citybucketlist[i]==='london'){
//         let islondoninlist=citybucketlist[i]
//         console.log("is is there");
//     }
// }
let islondonlist=citybucketlist.includes('london')
console.log(islondonlist);













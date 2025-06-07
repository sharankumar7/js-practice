let comp = {
  cpu: "intel",
  ram: "8gb",
  storage: "1tb",
};
let mac = {
  screen: "FHD+",
  __proto__: comp,
};

console.log(comp);
// dunder
console.log(comp.__proto__);
console.log(mac.__proto__);

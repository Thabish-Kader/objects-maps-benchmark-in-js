
const obj = {
  1: "apples",
  2: "bananas",
  3: "watermelons",
};
const maps = new Map([
  [1, "apples"],
  [obj, "bananas"],
  [() => true, "watermelons"],
]);

// console.log(maps);
// maps have the size property
// console.log(maps.size);

// MAPS can be transformed to Array and vice versa
const myArray = Array.from(maps)
// console.log(myArray)

const arr = [ [1, 'banana'], [2, 'apples'] ];
const mymap = new Map(arr);
// console.log(mymap);

// combine arrays and maps
const combinedMaps = new Map([...arr, ...maps]);
console.log(combinedMaps);

// console.log(maps instanceof Map);
// console.log(obj);


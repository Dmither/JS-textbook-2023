// let salaries = {
//   "Іван": 100,
//   "Петро": 300,
//   "Марія": 250
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   let map = new Map(Object.entries(salaries));
//   for (let item of map.values()) {
//     sum += item;
//   }
//   return sum;
// }

// console.log( sumSalaries(salaries) );


let user = {
  name: 'Іван',
  age: 30
};

function count(obj) {
  let set = new Set(Object.keys(obj));

  return set.size;
}

console.log( count(user) )
function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };

// console.log(menu);

// let copy = {};

// for (const key in menu) {
//   copy[key] = menu[key];
// }

// console.log(copy);

// let copy1 = Object.assign({}, menu);

// console.log(copy1);
// console.log(typeof copy);

// function cloneObj(obj) {
// 	let res = {};

// 	for (let key in obj) {
// 		res[key] =
// 			typeof obj[key] == "object" ? cloneObj(obj[key]) : obj[key];
// 	}

// 	return res;
// }

// let person = {
// 	name: "Sam",
// 	age: 26,
// 	parents: {
// 		father: "Tom",
// 		mother: "Alice",
// 	},
// 	sayHi() {
// 		console.log(`Hi! I am ${this.name}`);
// 	},
// };

// console.log(person);

// let anotherPerson = cloneObj(person);

// console.log(anotherPerson);
// anotherPerson.name = "Rick";
// anotherPerson.parents.mother = "Nina";

// anotherPerson.sayHi();

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function (){ // показує поточний крок
    alert( this.step );
    return this;
  }
};


ladder.up().up().showStep()
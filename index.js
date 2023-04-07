// function camelize(str) {
// 	let arr = str.split("-");
//   console.log(arr);

// 	for (let i = 1; i < arr.length; i++) {
// 		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// 	}

// 	return arr.join("");
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function filterRange(arr, a, b) {
// 	return arr.filter(elem => elem >= a && elem <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);

// function filterRangeInPlace(arr, a, b) {
// 	while(arr.find(value => value < a || value > b)) {
// 		arr.splice(arr.findIndex(value => value < a || value > b), 1);
// 	}
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// console.log(arr)

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// let arr = ["HTML", "JavaScript", "CSS"];

// let copy = arr.slice().sort((a, b) => a.localeCompare(b));

// console.log(arr);
// console.log(copy);

// function Calculator() {
// 	this.operations = {
// 		"\+": (a, b) => a + b,
// 		"\-": (a, b) => a - b,
// 	}

// 	this.calculate = function(str) {
// 		let arr = str.split(" ");
// 		if (!this.operations[arr[1]]) return NaN;
// 		return this.operations[arr[1]](+arr[0], +arr[2]);
// 	}

// 	this.addOperation = function(name, func) {
// 		this.operations[name] = func;
// 	}
// }

// let calc = new Calculator();
// console.log(calc.calculate("1 + 2"));
// console.log(calc.calculate("a ** 3"));

// calc.addOperation("*", (a, b) => a * b)
// calc.addOperation("/", (a, b) => a / b)
// calc.addOperation("**", (a, b) => a ** b)

// console.log(calc.calculate("1 ** 3"))

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ ivan, petro, mariya ];

// let names = users.map(item => item["name"]);
// console.log(names);

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ivan, petro, mariya];

// let usersMapped = users.map(user => ({
// 	fullName: `${user.name} ${user.surname}`,
// 	id: user.id,
// }));

// console.log(usersMapped);
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// arr.sort((a, b) => a.age - b.age);

// console.log(arr);

// function shuffle(arr) {
// 	return arr.sort((a, b) => Math.random() - Math.random());
// }
// let arr = [1, 2, 3];

// let a = 0;
// let b = 0;
// let c = 0;
// let d = 0;
// let e = 0;
// let f = 0;
// for (let i = 0; i < 10000; i++) {
// 	shuffle(arr);
// 	if (arr[0] == 1) {
// 		if (arr[1] == 2) a++;
// 		else b++;
// 	} else if (arr[0] == 2) {
// 		if (arr[1] == 1) c++;
// 		else d++;
// 	} else {
// 		if (arr[1] == 1) e++;
// 		else f++;
// 	}
// }
// console.log(`123: ${a}
// 132: ${b}
// 213: ${c}
// 231: ${d}
// 312: ${e}
// 321: ${f}`);

// function getAcerageAge(users) {
// 	let sum = 0;
// 	let count = 0;
// 	for (let user of users) {
// 		count++;
// 		sum += user["age"];
// 	}
// 	return sum / count
// }

// let john = { name: "John", age: 26 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log(getAcerageAge(arr))

// function unique(arr) {
// 	let arr2 = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!arr2.includes(arr[i])) arr2.push(arr[i]);
// 	}
// 	return arr2;
// }

// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];

// console.log(unique(strings))

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

result = 0;
for (let i of arr) {
	result += i
}

console.log(result)

let users = [
  {id: 'іван', name: "Іван Іванко", age: 20},
  {id: 'ганна', name: "Ганна Іванко", age: 24},
  {id: 'петро', name: "Петро Петренко", age: 31},
];

let usersById = groupById(users);

function groupById(users) {
	console.log(users)

	let result = {};
	for (let user of users) {
		result[user.id] = user;
	}

	// return result

	return users.reduce((result, user) => {
		result[user.id] = user;
		return result
	}, new Object())
}

console.log(usersById)
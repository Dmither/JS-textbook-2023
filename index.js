function sumAll(a, ...args) {
	let sum = a;
	for (let arg of args) sum += arg;

	console.log(args)
	console.log(Object.values(arguments));
	return sum;
}


let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr = [...arr1, ...arr2]
console.log(sumAll(0, ...arr));


let obj = {
	a: 1,
	b: 2,
	c: 3,
}

console.log(...Object.values(obj))
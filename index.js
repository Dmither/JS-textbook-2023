function Auto(brand, price, gas) {
	this.brand = brand;
	this.price = price;
	this.gas = gas;
}

Auto.prototype.drive = function () {
	if (this.gas > 0) {
		this.gas -= 20;
		return this.gas;
	} else {
		return "can't drive";
	}
};

const bmw = new Auto("BMW", "100,000", 100);
const nissan = new Auto("Nissan", "100,000", 100);

// ===================================================================

let user = {
	name: "John",
	surname: "Smith",

	set fullName(value) {
		[this.name, this.surname] = value.split(" ");
	},

	get fullName() {
		return `${this.name} ${this.surname}`;
	},
};

let admin = {
	__proto__: user,
	isAdmin: true,
};

admin.fullName = "Alice Cooper";

let ours = [];
let extanded = [];

for (let prop in admin) {
	if (admin.hasOwnProperty(prop)) {
		ours.push(prop);
	} else {
		extanded.push(prop);
	}
}

// ===================================================================

// function Rabbit() {
// 	this.eats = true;
// }

// let rabbit = new Rabbit()

// let rabbit2 = new rabbit.constructor();

// ===================================================================

let animal = {
	eats: true,
};

let rabbit = Object.create(animal, {
	jumps: {
		value: true,
		writable: true,
		enumerable: true,
		configurable: true
	},
});

console.log(Object.getOwnPropertyDescriptor(animal, "eats"))

console.log(rabbit);

console.log(Object.getOwnPropertyDescriptor(rabbit, "jumps"));

console.log(Object.getPrototypeOf(rabbit) === animal);

let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit))

console.log(clone)
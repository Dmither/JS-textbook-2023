"use strict";

let user = {
	name: "Іван",
	toString() {
		return this.name;
	},
};

Object.defineProperty(user, "name", { configurable: false });
Object.defineProperty(user, "name", { writable: false });

console.log(Object.getOwnPropertyDescriptors(user));

let clone = Object.defineProperties(
	{},
	Object.getOwnPropertyDescriptors(user)
);

console.log(clone);

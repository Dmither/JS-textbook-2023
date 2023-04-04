let user = {
  name: "John",
  age: 26,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? this.name : this.age;
  },
}

console.log(user);
console.log("" + user);
console.log(+user);

let person = {
  name: "John",
  age: 26,
  toString() {
    return this.name;
  },
  valueOf() {
    return this.age;
  }
}

console.log(person);
console.log("" + person);
console.log(+person);
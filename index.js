function Obj() {
  this.name = "Sam";
  this.age = 18
}

Obj.prototype = {}

let obj = new Obj()

console.log(obj)
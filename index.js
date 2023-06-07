class A {
  methodA() {console.log("showA")}
}

class B {
  constructor() {
    this.methodB = function() {
      console.log("showB")
    }
  }
}

class C extends A {
  methodC() {console.log("showC")}
}

let b = new B()

Object.assign(C.prototype, b)
let c = new C()
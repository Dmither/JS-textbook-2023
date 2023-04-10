let messages = [
  {text: "Привіт", from: "Іван"},
  {text: "Як справи?", from: "Іван"},
  {text: "До зустрічі", from: "Аліса"}
];

let weakSet = new WeakSet();
let weakMap = new WeakMap();

function readMessage(message) {
  weakSet.add(message);
  weakMap.set(message, new Date());
}

readMessage(messages[0]);
readMessage(messages[2]);

console.log(weakMap)
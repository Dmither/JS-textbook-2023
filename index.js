function groupById(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {})
}

let users = [
  {id: 'іван', name: "Іван Іванко", age: 20},
  {id: 'ганна', name: "Ганна Іванко", age: 24},
  {id: 'петро', name: "Петро Петренко", age: 31},
];

let usersById = groupById(users);

console.log(usersById)
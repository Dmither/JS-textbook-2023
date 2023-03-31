function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}


let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

function multyplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

console.log(menu);

multyplyNumeric(menu);

console.log(menu);
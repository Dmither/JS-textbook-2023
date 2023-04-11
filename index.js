let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > max) {
      maxName = key;
      max = value;
    } 
  }
  return maxName;
}

console.log(topSalary(salaries));
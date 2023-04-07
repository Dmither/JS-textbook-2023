function getMaxSubSum2(arr) {
  let maxSum = 0; // якщо елементи відсутні - повертаємо 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum2([-1, 2, 3, -9]))
console.log(getMaxSubSum2([2, -1, 2, 3, -9]))
console.log(getMaxSubSum2([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum2([-2, -1, 1, 2]))
console.log(getMaxSubSum2([100, -9, 2, -3, 5]))
console.log(getMaxSubSum2([1, 2, 3]))
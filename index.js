function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    let num = prompt();
    this.value += isNaN(num) ? 0 : +num
  }
}
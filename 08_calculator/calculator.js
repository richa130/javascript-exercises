const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  // reduce() takes a callback fn and an initial value
  const running_sum = arr.reduce((x, y) => x + y, 0);
  return running_sum;
};

const multiply = function(arr) {
  return arr.reduce((x, y) => x * y, 1);
};

const power = function(x, y) {
  return x ** y;
};


// recursive fn
const factorial = function(num) {
  if(num == 0) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function( arr  = []) {
  return arr.reduce((sum, curr) => sum + curr,0)
};

const multiply = function(arr = []) {
  return arr.reduce((prod, curr) => prod * curr, 1)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(x) {
	  if(x < 1)
      return 1;
    else 
          for(let i = x-1; i > 0; i--)
            x *= i;
          return x;
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

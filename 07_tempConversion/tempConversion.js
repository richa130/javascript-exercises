const ftoc = function(far) {
  let cel = (far - 32) * (5/9);

  if(cel % 1 != 0) { // checks if cel has a decimal or not
    return +cel.toFixed(1);
  }

  return +cel; // unary plus converts a string to a number, like calling the Number() constructor
};

const ctof = function(cel) {
  let far = cel * (9/5) + 32

  if(far % 1 != 0) {
    return +far.toFixed(1);
  }
  
  return +far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

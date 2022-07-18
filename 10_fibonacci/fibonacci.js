const fibonacci = function(num) {
    num = +num;

    if(num  < 0) {
        return 'OOPS';
    }

    if(num == 0) {
        return 0;
    }

    if(num == 1 || num == 2 ) {
        return 1;
    }
    
    let a = 1;
    let b = 1;
    let sum = a + b;

    for(let i = 3; i < num; i++) {
        a = b;
        b = sum;
        sum = a + b;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;

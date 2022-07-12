const reverseString = function(str) {
    ret = "";
    len = str.length;

    for(let i = len - 1; i >= 0; i--) {
        ret += str.charAt(i);
    }

    return ret;
};

// Do not edit below this line
module.exports = reverseString;

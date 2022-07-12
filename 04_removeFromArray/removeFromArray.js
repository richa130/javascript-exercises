const removeFromArray = function(arr, rem) {
    const rems = Array.from(arguments);

    let len1 = rems.length;
    let len2 = arr.length;
    let curr_rem;

    for(let i = 1; i < len1; i++) { // we make it start from 1 because the first arg will be the array
        curr_rem = rems[i];
        
        for(let j = 0; j < len2; j++) {
            if(arr[j] ===  curr_rem) {
                arr.splice(j, 1); // starting at element j, remove just one element w/out leaving any undefined holes
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

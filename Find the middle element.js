var gimme = function(inputArray) {
    var max = inputArray[0],
        min = inputArray[0],
        middle = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > max) {
            max = inputArray[i];
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < min) {
            min = inputArray[i];
        }

    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > min && inputArray[i] < max) {
            middle = i;
        }
    }
    return middle;
};

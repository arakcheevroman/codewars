Math.round = function(number) {
    var remainder = number % 1;
    var result = 0;

    if (remainder >= 0.5) {
        return number + 1 - number % 1;
    } else {
        return number - number % 1;
    }

};

Math.ceil = function(number) {
    if (number % 1 > 0) {
        var number = number + 1;
        return number - number % 1;
    } else return number;
};

Math.floor = function(number) {
    return number - number % 1;
};

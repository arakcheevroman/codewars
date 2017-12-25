function highAndLow(numbers) {
    var arr = numbers.split(" ");
    var maximum = Math.max.apply(Math, arr);
    var minimum = Math.min.apply(Math, arr);
    return (maximum + " " + minimum);
}

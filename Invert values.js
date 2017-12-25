function invert(array) {
    var newMass = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newMass.push(Number("-" + array[i]));
        } else if (array[i] < 0) {
            newMass.push(array[i] - array[i] * 2);
        } else {
            newMass.push(0);
        }
    }
    return newMass;
}

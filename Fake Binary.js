function fakeBin(x) {
    var mass = x.split("");
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] < 5) {
            mass[i] = 0;
        } else if (mass[i] > 5) {
            mass[i] = 1;
        } else if (mass[i] = 5) {
            mass[i] = 1;
        }
    }
    return mass.join("");
}

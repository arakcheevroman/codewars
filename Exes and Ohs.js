function XO(str) {
    var mass = str.split("");
    var massX = [];
    var massO = [];

    for (var i = 0; i < mass.length; i++) {
        if (mass[i] == "x" || mass[i] == "X") {
            massX.push(mass[i]);
        }
    }

    for (var i = 0; i < mass.length; i++) {
        if (mass[i] == "o" || mass[i] == "O") {
            massO.push(mass[i]);
        }
    }

    if (massX.length == massO.length) {
        return true;
    } else {
        return false;
    }
}

function kebabize(str) {
    var str = str.replace(/[0-9]/g, ''),
        mass = str.split(""),
        result = [],
        position = [];

    for (let i = 0; i < mass.length; i++) {
        if (isUpperCase(mass[i])) {
            position[i] = "-" + mass[i].toLowerCase();
        } else {
            position[i] = mass[i];
        }

    }

    var result = position.join("").split("");

    if (result[0] == "-") {
        delete result[0];
    }

    return result.join("");

    function isUpperCase(symbol) {
        var value = symbol.toUpperCase() == symbol;
        return !!value;
    }
}

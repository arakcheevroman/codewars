function toCamelCase(str) {
    if (str == "") {
        return str;
    } else if ((str.search(/_/i)) != -1) {
        var mass = str.split("_");
        var result = [];
        result.push(mass[0]);
        for (let i = 1; i < mass.length; i++) {
            result.push(mass[i].charAt(0).toUpperCase() + mass[i].slice(1));
        }
        return result.join("");
    } else {
        var mass = str.split("-");
        var result = [];
        result.push(mass[0]);
        for (let i = 1; i < mass.length; i++) {
            result.push(mass[i].charAt(0).toUpperCase() + mass[i].slice(1));
        }
        return result.join("");
    }
}

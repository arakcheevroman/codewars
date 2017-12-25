function solution(string) {
    function isUpper(a) {
        var isU = a.toUpperCase() == a;
        return !!isU;
    }
    var result = [];
    for (let i = 0; i < string.length; i++) {
        if (isUpper(string[i])) {
            result.push(" " + string[i]);
        } else {
            result.push(string[i]);
        }

    }
    return result.join("");
}

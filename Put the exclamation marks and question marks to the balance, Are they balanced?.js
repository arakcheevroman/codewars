function balance(left, right) {

    var left = left.split("");
    var right = right.split("");
    var resultLeft = 0,
        resultRight = 0,
        result;

    for (let i = 0; i < left.length; i++) {
        if (left[i] == '!') {
            resultLeft += 2;
        } else if (left[i] == "?") {
            resultLeft += 3;
        }
    }

    for (let i = 0; i < right.length; i++) {
        if (right[i] == '!') {
            resultRight += 2;
        } else if (right[i] == "?") {
            resultRight += 3;
        }
    }

    if (resultLeft > resultRight) {
        result = "Left";
    } else if (resultLeft < resultRight) {
        result = "Right";
    } else {
        result = "Balance";
    }

    return result;

}

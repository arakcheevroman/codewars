function persistence(num) {
    var time = 0;

    function multi_recur(int) {
        var str = int + '';
        var arr = str.split('');
        res = arr.reduce(function(pre, cur) {
            return pre * cur
        });
        time += 1;
        if (String(res).length != 1) {
            multi_recur(res);
        }
    }
    if (String(num).length != 1) {
        multi_recur(num);
    } else {
        return 0;
    }
    return time;
}

function calculateYears(principal, proc, stavka, resultmoney) {
    var year = 0;
    while (principal < resultmoney) {
        var procents = principal * proc;
        var procentsAfter = procents - procents * stavka;
        var withProcent = procents + principal;
        var resultYear = principal + procentsAfter;
        principal = resultYear;
        year++;
    }
    return year;
}

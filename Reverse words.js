function reverseWords(str) {
    var massOne = str.split(""),
        massTwo = str.split(" "),
        massTwoReverse = [],
        resultTwo = [],
        reg = /\s/;
  
    if (reg.test(str)) {
        for (let i = 0; i < massTwo.length; i++) {
            massTwoReverse.push(massTwo[i].split("").reverse());
        }
        for (let i = 0; i < massTwoReverse.length; i++) {
            resultTwo[i] = massTwoReverse[i].join("");
        }
        return resultTwo.join(" ");
    } else {
        return massOne.reverse().join("");
    }

}

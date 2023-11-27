function nbYear(p0, percent, aug, p) {
    let index = 0;
    while (p > p0) {
        p0 += p0 * percent/100 + aug;
        index++;
    }
        return index;
}

console.log(nbYear(1000, 2, 50, 1200))
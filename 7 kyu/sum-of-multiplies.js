function sumMul(n, m) {
    let sum = 0;
    for (let i = 1; i < m; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }
    return sum === 0 ? 'INVALID' : sum;
}
function between(a, b) {
	return Array.from({length: b - a + 1}, (_, x) => a + x )
}

console.log(between(-1, 4))
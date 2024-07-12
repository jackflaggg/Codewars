function isValid(formula) {
	const counts = {};
	formula.forEach(material => {
		counts[material] = (counts[material] || 0) + 1;
		console.log(counts)
	});

	// Check the conditions
	return Boolean(!(counts[1] && counts[2]) &&
		!(counts[3] && counts[4]) &&
		(counts[5] === counts[6]) &&
		(counts[7] || counts[8]));
}

console.log(isValid([1, 7, 8]))
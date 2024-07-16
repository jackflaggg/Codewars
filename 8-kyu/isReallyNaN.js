const isReallyNaN = (val) => {
	// return isNaN(val);  // wasn't working as planned :-(
	return typeof val === 'number' && isNaN(val);
};

console.log(isReallyNaN(NaN));
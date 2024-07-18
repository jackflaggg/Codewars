function logicalCalc(array, op){
	let res = []
	switch(op){
		case 'AND':
			res = array.reduce((acc, val) => acc && val, true);
			break;
		case 'XOR':
			res = array.reduce((acc, val) => acc ^ val, false);
			break
		case 'OR':
			res = array.reduce((acc, val) => acc || val, false);
			break
	}
	return Boolean(res);
}

console.log(logicalCalc([true, true, true, true], "AND"))
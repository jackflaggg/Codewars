// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// 	You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
	for (let age = ages.length - 1; age > 0; age--){
		for (let revAge = 0; revAge < age; revAge++){
			const leftNumber = ages[revAge];
			const rightNumber = ages[revAge+1];
			if (leftNumber > rightNumber) {
				ages[revAge+1] = leftNumber;
				ages[revAge] = rightNumber;
			}
		}
	}
	return [ages[0], ages[ages.length-1], ages[ages.length-1] - ages[0]];
}

function differenceInAgesTwo(ages){
	const minAge = Math.min(...ages);
	const maxAge = Math.max(...ages);
	console.log(...ages)
	return [minAge, maxAge, maxAge - minAge];
}

console.log(differenceInAges([3,2,1]))
console.log(differenceInAgesTwo([3,2,1]))
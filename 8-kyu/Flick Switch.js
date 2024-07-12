// Create a function that always returns True/true for every item in a given list.
// 	However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr){
	let switchFlag = true;
	return arr.map((elem) => elem === 'flick' ? switchFlag = !switchFlag : switchFlag );
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
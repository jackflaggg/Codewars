function warnTheSheep(queue) {
	return queue.reverse().indexOf('wolf') && queue.length !== queue.reverse().indexOf('wolf') + 1 ?
		`Oi! Sheep number ${queue.reverse().indexOf('wolf')}! You are about to be eaten by a wolf!` : `Pls go away and stop eating my sheep`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"] ))
function betterThanAverage(classPoints, yourPoints) {
	return yourPoints > classPoints.reduce((acc, elem) => acc + elem, 0) / classPoints.length
}


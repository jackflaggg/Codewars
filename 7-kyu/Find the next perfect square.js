function findNextSquare(sq) {
	// Проверка, является ли sq совершенным квадратом
	const root = Math.sqrt(sq);
	if (Number.isInteger(root)) {
		return Math.pow(root + 1, 2); // Возврат следующего совершенного квадрата
	}
	return -1; // Если sq не совершенный квадрат, вернуть -1
}

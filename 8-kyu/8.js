function calculator(a, b, sign) {
	// Регулярное выражение для проверки оператора
	const regSymbol = /^[\-+\/*]$/; // Используем выражение для проверки одного символа из указанных

	// Проверяем, является ли знак допустимым
	if (!regSymbol.test(sign)) return 'unknown value';

	// Проверяем, являются ли a и b числами
	if (isNaN(+a) || isNaN(+b)) return 'unknown value';

	// Выполняем операцию в зависимости от знака
	switch (sign) {
		case '+':
			return +a + +b;
		case '-':
			return +a - +b;
		case '*':
			return +a * +b;
		case '/':
			if (+b === 0) return Infinity; // Проверка на деление на ноль
			return +a / +b;
		default:
			return 'unknown value'; // На всякий случай
	}
}

function calculateAge(n, m) {
	if (n === m) {
		return "You were born this very year!";
	}
	return n > m ? `You will be born in ${n - m} year${n - m === 1 ? '' : 's'}.` : `You are ${m - n} year${m - n === 1 ? '' : 's'} old.`;
}
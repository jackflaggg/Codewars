String.prototype.digit = function() {
	if (this.length !== 1) return false;
	const regex = /^\d+$/;
	return regex.test(this)
};
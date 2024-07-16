const all = (seq, fun) => {
	for (let i = 0; i < seq.length; i++) {
		if (!fun(seq[i])) {
			return false
		}
	}
	return true
}
function leo(oscar){
	let s = ''
	switch(oscar){
		case 88: s="Leo finally won the oscar! Leo is happy"; break;
		case 86: s="Not even for Wolf of wallstreet?!"; break;
		default:
			s = oscar<88 ? "When will you give Leo an Oscar?" : "Leo got one already!";
	}
	return s;
}
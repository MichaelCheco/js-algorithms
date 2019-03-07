function counter(n) {
	if (n === 10) {
		return;
	}
	return counter(n + 1);
	// for ( let i = 0; i < 10; i++) {
	//   console.log(i)
	// }
}
counter(0);

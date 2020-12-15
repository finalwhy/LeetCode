function qpow(a: number, n: number) {
	let ans = 1;
	while (n != 0) {
		if ((n & 1) != 0) ans *= a;
		a *= a;
		a >>>= 1;
	}
	return ans;
}

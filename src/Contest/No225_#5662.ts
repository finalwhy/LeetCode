type Most = { char: string; num: number };

function get_equal(
	a: string,
	b: string,
	mapA: number[],
	mapB: number[],
	Amost: Most,
	Bmost: Most
): number {
	return Math.max(
		a.length - Amost.num + (b.length - mapB[Amost.char.charCodeAt(0)]),
		b.length - Bmost.num + (a.length - mapA[Bmost.char.charCodeAt(0)])
	);
}

function get_below(a: string, b: string, mapA: number[], mapB: number[]): number {
	const Aset = new Set(a),
		Bset = new Set(b),
		aBbSet = new Set(),
		bBaSet = new Set();

    return 0;
}

function minCharacters(a: string, b: string): number {
	const mapA: number[] = [],
		mapB: number[] = [];

	let Amost = { char: '', num: 0 },
		Bmost = { char: '', num: 0 };

	for (const char of a) {
		let charCode = char.charCodeAt(0);
		mapA[charCode] == undefined ? (mapA[charCode] = 1) : mapA[charCode]++;

		if (mapA[charCode] > Amost.num) {
			Amost.char = char;
			Amost.num = mapA[charCode];
		}
	}

	for (const char of b) {
		let charCode = char.charCodeAt(0);
		mapB[charCode] == undefined ? (mapB[charCode] = 1) : mapB[charCode]++;

		if (mapB[charCode] > Bmost.num) {
			Bmost.char = char;
			Bmost.num = mapB[charCode];
		}
	}

	let equal = get_equal(a, b, mapA, mapB, Amost, Bmost),
		below = get_below(a, b, mapA, mapB);
	// return Math.min(equal, below);
    return equal;
}

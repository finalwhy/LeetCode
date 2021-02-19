/*
 * 结题思路：大整数加法的ts实现
 */

function addToArrayForm(A: number[], K: number): number[] {
	const arrK: number[] = [],
		ans: number[] = [];

	while (K != 0) {
		arrK.push(K % 10);
		K = ~~(K / 10);
	}

	A.reverse();

	while (arrK.length < A.length) arrK.push(0);
	while (A.length < arrK.length) A.push(0);

	let c = 0;
	for (let start = 0; start < arrK.length; start++) {
		let now = arrK[start] + A[start];
		c = ~~(now / 10);
		ans.push(now % 10);
	}

	if (c != 0) ans.push(c);

	return ans.reverse();
}

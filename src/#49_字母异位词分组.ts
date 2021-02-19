/*
 * 总体思路：每个字母异位词自身所含的字母种数和每种字母的个数是相同的，经过排序后的字典序相同，因此基本思想是利用散列表（hash）
 * 进行存储，对于散列函数的选择有两种方法：
 *  1. 对每个词按字典序排序，以排序后的字典序字符串作为散列表的key值。
 *  2. 统计每个词中的字母出现频率，将统计结果字符串化后作为散列表的key值。
 */
//方法1的实现
function hash(str: string) {
	let charMap: number[] = [];
	charMap[25] = 0;
	charMap.fill(0, 0, 25);
	for (let ind = 0; ind < str.length; ind++) {
		charMap[str.charCodeAt(ind) - 'a'.charCodeAt(0)]++;
	}
	return charMap.join('-');
}

function groupAnagrams(strs: string[]): string[][] {
	let map = new Map<string, string[]>();
	for (let i = 0; i < strs.length; i++) {
		let strHash = hash(strs[i]);

		if (map.has(strHash)) {
			let tmp = map.get(strHash)!;
			tmp.push(strs[i]);
			map.set(strHash, tmp);
		} else {
			map.set(strHash, [strs[i]]);
		}
	}

	return [...map.values()];
}

// 方法2的实现
/*
function groupAnagrams(strs: string[]): string[][] {
	let map = new Map<string, string[]>();
	for (let i = 0; i < strs.length; i++) {
		let strHash = strs[i].split('').sort().join('');

		if (map.has(strHash)) {
			let tmp = map.get(strHash)!;
			tmp.push(strs[i]);
			map.set(strHash, tmp);
		} else {
			map.set(strHash, [strs[i]]);
		}
	}

	return [...map.values()];
}
 */
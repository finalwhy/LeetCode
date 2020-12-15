export class PriorityQueue<T> {
	//自建的优先队列，使用二叉堆实现,在不传入cmpFun时，默认为按字典序的小顶堆，
	#heapArr: T[];
	#cmpFun: Function;

	constructor(arr?: T[], cmpFun?: Function) {
		this.#heapArr = arr == undefined ? [] : [...arr];
		this.#cmpFun =
			cmpFun ??
			((a: T, b: T): Boolean => a < b);
		this.init();
	}

	public count(): number {
		return this.#heapArr.length;
	}

	public isEmpty(): Boolean {
		return this.#heapArr.length == 0;
	}

	//获取队头元素的值，但不从队列中删除它
	public top(): T | undefined {
		return this.#heapArr[0];
	}

	//向队尾中加入元素
	public push(item: T): void {
		this.#heapArr.push(item);
		this.upAdjust();
	}

	//取出队头元素
	public pop(): T | undefined {
		if (this.#heapArr.length == 0) return undefined;
		let res = this.#heapArr.shift();
		if (this.#heapArr.length > 0) {
			let last = this.#heapArr.pop()!;
			this.#heapArr.splice(0, 0, last);
			// console.log('heap befor pop-downajust:', this.#heapArr);
			this.downAdjust(0);
			// console.log('heap after pop-downajust:', this.#heapArr);
		}
		return res;
	}

	//初始化队列，构架二叉堆
	private init(): void {
		let start = Math.floor((this.#heapArr.length - 2) / 2);
		for (let i = start; i >= 0; i--) {
			this.downAdjust(i);
		}
	}

	//上浮操作
	private upAdjust(): void {
		let childID = this.#heapArr.length - 1;
		let parentID = Math.floor((childID - 1) / 2);
		let tmp = this.#heapArr[childID];
		while (childID > 0 && this.#cmpFun(tmp, this.#heapArr[parentID])) {
			this.#heapArr[childID] = this.#heapArr[parentID];
			childID = parentID;
			parentID = Math.floor((childID - 1) / 2);
		}

		this.#heapArr[childID] = tmp;
	}

	//下沉操作
	private downAdjust(parentID: number): void {
		let maxID = this.#heapArr.length - 1;
		let childID = parentID * 2 + 1;
		let tmp = this.#heapArr[parentID];

		while (childID < maxID) {
			if (childID + 1 <= maxID && this.#cmpFun(this.#heapArr[childID + 1], this.#heapArr[childID])) {
				childID += 1;
			}

			if (this.#cmpFun(tmp,this.#heapArr[childID])) break;

			this.#heapArr[parentID] = this.#heapArr[childID];
			parentID = childID;
			childID = parentID * 2 + 1;
		}

		this.#heapArr[parentID] = tmp;
	}
}
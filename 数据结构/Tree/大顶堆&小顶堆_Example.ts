import { PriorityQueue } from './优先队列';

//小顶堆
const SmallestHeap = new PriorityQueue<number>([]);

for (let i = 5; i > 0; i--) SmallestHeap.push(i);

while (!SmallestHeap.isEmpty()) console.log(SmallestHeap.pop());

//大顶堆
const BiggestHeap = new PriorityQueue<number>([], (a:number, b:number) => a > b);
for (let i = 1; i <= 5; i++) BiggestHeap.push(i);

while (!BiggestHeap.isEmpty()) console.log(BiggestHeap.pop());

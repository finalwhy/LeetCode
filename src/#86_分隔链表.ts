import { ListNode } from './DataClass';

function partition(head: ListNode | null, x: number): ListNode | null {
	if (head == null || head.next == null) return head;
	let now: ListNode | null = head,
		before: ListNode | null = null,
		l_head = new ListNode(),
		l_now = l_head,
		f_notSamll: ListNode | null = null;

	while (now != null) {
		if (f_notSamll == null && now.val >= x) f_notSamll = now;

        if (now.val < x) {
			if (before != null) before.next = now.next;
			l_now.next = now;
			l_now = l_now.next;
		} else before = now;

		now = now.next;
	}

	l_now.next = f_notSamll;

	return l_head.next;
}
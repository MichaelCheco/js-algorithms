// create a node object that has 2 properties VALUE & NEXT

function createNode(value) {
	return {
		value,
		next: null,
	};
}

function createLinkedList() {
	return {
		// head & tail both start as null
		// head
		head: null,
		// tail
		tail: null,
		// length
		length: 0,
		// push
		push(value) {
			//1st make value a node
			const node = createNode(value);
			// have to update our tail to newly created note
			// if no head then list is empty
			if (this.head === null) {
				this.head = node;
				this.tail = node;
				this.length++;
				return node;
			}
			// our new node gets set to our current tail's next property
			this.tail.next = node;
			this.tail = node;
			this.length++;
			return node;
		},
		// pop
		pop() {
			// empty list
			if (this.isEmpty()) {
				return null;
			}
			const node = this.tail;
			// list of length 1 scenario
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
				// reset length to 0
				this.length--;
				return node;
			}
			// more than 1 item
			// set item before tail (penultimate) to the new tail with it's next value set to null
			let current = this.head;
			let penultimate;
			while (current) {
				if (current.next === this.tail) {
					penultimate = current;
					break;
				}
				current = current.next;
			}
			penultimate.next = null;
			this.tail = penultimate;
			this.length--;
			return node;
		},
		// get
		get(index) {
			// outside the range of our list
			if (index < 0 || index > this.length - 1) {
				return null;
			}
			if (index === 0) {
				return this.head;
			}

			let current = this.head;
			// when i matches index passed in 👍
			let i = 0;
			while (i < index) {
				i++;
				current = current.next;
			}
			// once our loop is done we know we've gotten to the right index
			return current;
		},
		// delete
		delete(index) {
			if (index < 0 || index > this.length - 1) {
				return null;
			}
			if (index === 0) {
				const deleted = this.head;
				this.head = this.head.next;
				this.length--;
				return deleted;
			}
			let current = this.head;
			// A deletion in a linked list takes a previous' next property and pointing it to the current node's next property, slicing out the node
			let previous;
			let i = 0;
			while (i < index) {
				i++;
				previous = current;
				current = current.next;
			}
			const deleted = current;
			previous.next = current.next;
			// case where we deleted the tail
			if (previous.next === null) {
				this.tail = previous;
			}
			this.length--;
			return deleted;
		},
		// isEmpty
		isEmpty() {
			return this.length === 0;
		},
		print() {
			const values = [];
			let current = this.head;
			while (current) {
				values.push(current.value);
				current = current.next;
			}
			return values.join(' => ');
		},
	};
}
const list = createLinkedList();
const values = ['a', 'b', 'c', 'd', 'e'];
const nodes = values.map(val => list.push(val));

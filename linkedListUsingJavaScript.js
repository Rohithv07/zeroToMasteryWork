class MyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = {
			value: value,
			next: null
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = {
			value: value,
			next: null
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	insert(index, value) {
		const insertNode = {
			value: value,
			next: null
		};
		const leader = this.traverseToIndex(index - 1);
		const placeHolder = leader.next;
		leader.next = insertNode;
		insertNode.next = placeHolder;
		this.length++;
		return this.printList();
	}
	removeNode(index) {
		const leader = this.traverseToIndex(index - 1);
		const deleteNode = leader.next;
		leader.next = deleteNode.next;
		this.length--;
		return this.printList();
	}
	reverse() {
		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
		return this.printList();
	}
}

const myLinkedList = new MyLinkedList(1);
myLinkedList.append(5);
console.log(myLinkedList.printList());
myLinkedList.prepend(2);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 6);
console.log(myLinkedList.printList());
myLinkedList.removeNode(1);
console.log(myLinkedList.printList());
myLinkedList.reverse();

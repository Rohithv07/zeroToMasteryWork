class Stack {
	constructor() {
		this.array = [];
	}
	peek() {
		return this.array[this.array.length - 1];
	}
	push(value) {
		this.array.push(value);
		return this;
	}
	pop(value) {
		this.array.pop();
		return this;
	}
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.peek();
stack.pop();
stack.pop();
stack.pop();

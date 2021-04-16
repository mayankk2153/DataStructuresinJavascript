//Adding -> add to head
//Deleting -> Remove from head

const Node = require('../../Node');

class Stack {
  constructor() {
    this.head = null;
  }

  push(ele) {
    const temp = new Node(ele);
    if (this.head === null) this.head = temp;
    else {
      temp.setNextNode(this.head);
      this.head = temp;
    }
    return this.head;
  }

  pop() {
    if (this.head === null) return 'Underflow';
    else {
      this.head = this.head.getNextNode();
    }
    return this.head;
  }
}

const stack = new Stack();
console.log(stack.push('Mayank'));
console.log(stack.push('Shivam'));
console.log(stack.pop());

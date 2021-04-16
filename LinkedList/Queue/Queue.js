const Node = require('../../Node');

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(data) {
    const node = new Node(data);

    if (this.head === null) this.head = node;
    else {
      node.setNextNode(this.head);
      this.head = node;
    }

    return this.head;
  }

  dequeue() {
    if (this.head === null) {
      return 'Queue is Empty!';
    } else if (this.head.getNextNode() === null) {
      this.head = null;
      return 'Queue is drained!';
    } else {
      let secondLast;
      let temp = this.head;
      while (this.head.getNextNode()) {
        secondLast = this.head;
        this.head = this.head.getNextNode();
      }
      secondLast.setNextNode(null);
      this.head = temp;
    }

    return this.head;
  }
}

const queue = new Queue();
console.log(queue.enqueue('Mayank'));
console.log(queue.enqueue('Shivam'));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

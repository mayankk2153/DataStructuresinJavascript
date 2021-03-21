const Node = require('../../Node');

class LinkedListAddHead {
  constructor() {
    this.head = null;
  }
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
}

module.exports = LinkedListAddHead;

let ll = new LinkedListAddHead();
ll.addToHead('hello');
ll.addToHead('world');

console.log(ll);

const Node = require('./Node');

class LinkedList {
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

let ll = new LinkedList();
ll.addToHead('hello');
ll.addToHead('world');

console.log(ll);

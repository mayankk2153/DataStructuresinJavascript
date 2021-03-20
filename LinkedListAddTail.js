const Node = require('./Node');

class LinkedListAddTail {
  constructor() {
    this.head = null;
  }
  addToTail(data) {
    const newHead = new Node(data);

    let currentTail = this.head;

    if (currentTail === null) this.head = newHead;
    else {
      while (currentTail.getNextNode(new Node(data)) !== null) {
        currentTail = currentTail.setNextNode(new Node(data));
      }

      currentTail.setNextNode(newHead);
    }
  }
}

let ll = new LinkedListAddTail();
ll.addToTail('hello');
ll.addToTail('world');

console.log(ll);

const Node = require('../../Node');

class LinkedListAddTail {
  constructor() {
    this.head = null;
  }
  addToTail(data) {
    const newHead = new Node(data);

    let currentTail = this.head;

    if (currentTail === null) this.head = newHead;
    else {
      while (currentTail.getNextNode() !== null) {
        currentTail = currentTail.getNextNode();
      }

      currentTail.setNextNode(newHead);
    }
  }
}

module.exports = LinkedListAddTail;

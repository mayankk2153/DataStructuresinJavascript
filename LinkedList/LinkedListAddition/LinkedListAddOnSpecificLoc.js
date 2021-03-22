const Node = require('../../Node');

class LinkedListAddOnSpecificLoc {
  constructor() {
    this.head = null;
  }

  getSize(node) {
    let count = 1;
    if (!node) return 0;

    while (node.getNextNode()) {
      count += 1;
      node = node.getNextNode();
    }

    return count;
  }

  addNodeOnSpecificLoc(data, pos) {
    let currentHead = this.head;
    const newNode = new Node(data);

    // Case 1: Empty Linked List
    if (currentHead == null) this.head = newNode;
    // Case 2: Linked List contains 1 node
    else {
      let headNode = this.head;
      let size = this.getSize(headNode);

      if (size < pos) throw new Error('Position is greator than list size.');

      if (currentHead.getNextNode() === null) currentHead.setNextNode(newNode);
      // Case 3: Linked List contains more than 1 node
      else {
        let counter = 1;
        while (counter < pos) {
          currentHead = currentHead.getNextNode();
          counter += 1;
        }
        newNode.setNextNode(currentHead.getNextNode());
        currentHead.setNextNode(newNode);
      }
    }
  }
}


module.exports = LinkedListAddOnSpecificLoc;

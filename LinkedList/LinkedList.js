const Node = require('../Node');
const LinkedListDeleteHead = require('./LinkedListDeletion/LinkedListDeleteHead');

class LinkedList {
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
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
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
  addNodeInBetween(data) {
    let currentHead = this.head;
    const newNode = new Node(data);

    // Case 1: Empty Linked List
    if (currentHead == null) this.head = newNode;
    // Case 2: Linked List contains 1 node
    else if (currentHead.getNextNode() == null)
      currentHead.setNextNode(newNode);
    // Case 3: Linked List contains more than 1 node
    else {
      // traverse the list & get the node count
      let counter = 0;
      const initialHead = currentHead;
      while (currentHead.getNextNode() == null) counter += 1;

      // devide the count with 2 & get the position
      const position = counter / 2;

      // set the node on that position & assign the next & prev node address
      let flag = 0;
      currentHead = initialHead;
      while (flag < position) {
        currentHead = currentHead.getNextNode();
        flag += 1;
      }
      newNode.setNextNode(currentHead.getNextNode());
      currentHead.setNextNode(newNode);
    }
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
  deleteHead() {
    let currentHead = this.head;
    let response = LinkedListDeleteHead(currentHead);
    this.head = response.newHead;
    return response.value;
  }
  deleteTail() {
    let currentHead = this.head;
    let response = LinkedListDeleteHead(currentHead);
    this.head = response.newHead;
    return response.value;
  }
}

module.exports = LinkedList;

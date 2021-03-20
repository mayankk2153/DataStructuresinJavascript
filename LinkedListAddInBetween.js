const Node = require('./Node');

class LinkedListAddInBetween {
  constructor() {
    this.head = null;
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
}

const ll = new LinkedListAddInBetween();
ll.addNodeInBetween('Some');
ll.addNodeInBetween('Else');
ll.addNodeInBetween('Thing');
console.log(JSON.stringify(ll));

// Some -> Thing -> Else -> null

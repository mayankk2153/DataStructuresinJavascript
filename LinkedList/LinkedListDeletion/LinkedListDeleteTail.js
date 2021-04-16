const LinkedListDeleteTail = (head) => {
  // case 1: list is empty
  if (head == null) throw new Error('List is underflow.');
  // case 2: list has only 1 record
  else if (head.getNextNode() == null) return {value: head.data, newHead: null};
  // case 3: list has multiple records
  else {
    let initialHead = head;
    let secondLastHead;
    while (head.getNextNode()) {
      secondLastHead = head;
      head = head.getNextNode();
    }
    secondLastHead.setNextNode(null);

    return {value: head.data, newHead: initialHead};
  }
};

module.exports = LinkedListDeleteTail;
